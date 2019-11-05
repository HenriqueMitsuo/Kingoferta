<template>
  <v-flex>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-checkbox v-model="userCursoSuperior" label="Possuo curso superior"></v-checkbox>
        <v-select v-if="userCursoSuperior == true" v-model="userInterest" :rules="userInterestRules" :items="itemsSuperior" item-text="nome" item-value="codigo" label="Interesse em alguma pós-graduação?" filled required/>
        <v-select v-if="userCursoSuperior == false" v-model="userInterest" :rules="userInterestRules" :items="itemsNaoSuperior" item-text="nome" item-value="codigo" label="Interesse em algum curso superior?" filled required/>
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
            userInterestRules: [
               v => !!v || 'Por favor, selecione um item',
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
              sendInterest: this.userInterest[0],
              sendCourse: this.userCursoSuperior,
            });

            await Axios.post(url, data)
              .catch((err) =>{
                  this.snackColor = 'warning';
                  this.snackText = 'Erro de conexão! Tentar novamente. (' + err + ')';
                  this.snackbar = true;  
              })
              .then(Response => {
                  if (Response.data == 'sucesso') {
                    this.$router.push({name: 'home'});
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