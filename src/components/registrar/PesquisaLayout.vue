<template>
  <v-flex>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-checkbox v-model="userCursoSuperior" label="Possuo curso superior"></v-checkbox>
        <v-select v-if="userCursoSuperior == true" v-model="userInterest" :rules="userInterestRules" :items="itemsSuperior" label="Interesse em algum curso?" filled required/>
        <v-select v-if="userCursoSuperior == false" v-model="userInterest" :rules="userInterestRules" :items="itemsNaoSuperior" label="Interesse em algum curso?" filled required/>
        <v-btn block color="success" class="mb-4" @click="validateSurvey">Continuar</v-btn>
      </v-form> 
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
      // Pegar Cursos Não Superior
      await Axios.get('http://unisepe-cotacao.gearhostpreview.com/pst_api/consultaCursosNaoSuperior.php')
        .catch((err) =>{
           // eslint-disable-next-line
          console.log(err);
        })
        .then(Response => {
           // eslint-disable-next-line
          console.log(Response.data);
          return this.itemsNaoSuperior = Response.data;
        });

      // Pegar Cursos Superior
      await Axios.get('http://unisepe-cotacao.gearhostpreview.com/pst_api/consultaCursosSuperior.php')
        .catch((err) =>{
           // eslint-disable-next-line
          console.log(err);
        })
        .then(Response => {
           // eslint-disable-next-line
          console.log(Response.data);
          return this.itemsSuperior = Response.data;
        });
    },
    methods: {
      validateSurvey: async function() {
          if (this.$refs.form.validate()) {
            const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/pesquisaRegister.php';
            const data = JSON.stringify({
              sendUserCode: 1,
              sendInterest: this.userInterest[0],
              sendCourse: this.userCursoSuperior,
            });

            await Axios.post(url, data)
              .catch((err) =>{
                  console.log(err);
              })
              .then(Response => {
                  console.log(Response.data);
              });

              console.log("Dados preenchidos corretamente!");
              //this.$router.push({name: 'home'});
          } else {
              console.log("Dados Inválidos");
          }
      },
    },
}
</script>

<style>

</style>