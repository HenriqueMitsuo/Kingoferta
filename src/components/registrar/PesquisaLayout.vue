<template>
  <v-flex>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-checkbox v-model="userCursoSuperior" label="Possuo curso superior"></v-checkbox>
        <v-select v-model="userInterest" :rules="userInterestRules" :items="itemsSuperior" item-text="nome" item-value="codigo" label="Interesse em algum curso superior?" filled required/>
        <v-text-field v-model="userSurveyRA" :rules="userSurveyRARules" label="RA de quem recomendou o app" filled required></v-text-field>
        <v-btn block color="success" class="mb-4" @click="validateSurvey">Continuar</v-btn>
      </v-form> 
      <v-snackbar :color="snackColor" v-model="snackbar" :timeout="timeout">{{ snackText }}</v-snackbar>      
  </v-flex>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'PesquisaLayout',
    data () {
        return {
            snackbar: false,
            snackColor: '',
            snackText: '',
            timeout: 2000,
            valid: true,
            userCursoSuperior: false,
            userInterest: null,
            userSurveyRA: null, 
            userInterestRules: [
               v => !!v || 'Por favor, selecione um item',
            ],
            userSurveyRARules: [
              v => !!v || 'Por favor, insira um ra valido',
            ],
            itemsNaoSuperior: null,
            itemsSuperior: null,
        }
    },
    async created() {
      await Axios.get('http://unisepe-cotacao.gearhostpreview.com/pst_api/consultaCursosNaoSuperior.php')
        .catch((err) =>{
           this.snackColor = 'warning';
           this.snackText = 'Erro de conexão! Tentar novamente. (' + err + ')';
           this.snackbar = true;  
           this.$router.push({name: 'Login'});
        })
        .then(Response => {
          return this.itemsNaoSuperior = Response.data;
        });


      await Axios.get('http://unisepe-cotacao.gearhostpreview.com/pst_api/consultaCursosSuperior.php')
        .catch((err) =>{
           this.snackColor = 'warning';
           this.snackText = 'Erro de conexão! Tentar novamente. (' + err + ')';
           this.snackbar = true;  
           this.$router.push({name: 'Login'});
        })
        .then(Response => {
          return this.itemsSuperior = Response.data;
        });
    },
    methods: {
      validateSurvey: async function() {
          if (this.$refs.form.validate()) {
            const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/pesquisaRegister.php';
            const data = JSON.stringify({
              sendCourse: this.userCursoSuperior,
              sendInterest: this.userInterest[0],
              sendRA: this.userSurveyRA,
            });

            await Axios.post(url, data)
              .catch((err) =>{
                  this.snackColor = 'warning';
                  this.snackText = 'Erro de conexão! Tentar novamente. (' + err + ')';
                  this.snackbar = true;  
              })
              .then(Response => {
                  if (Response.data == 'sucesso') {
                    this.$router.push({name: 'home', params: {curso: this.userInterest[0]}});
                  } else {
                    this.snackColor = 'warning';
                    this.snackText = 'Erro de conexão! Tente novamente.';
                    this.snackbar = true; 
                  }    
              });
              
          }
      },
    },
}
</script>

<style>

</style>