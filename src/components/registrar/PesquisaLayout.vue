// Branch RegisterSurvey
<template>
  <v-flex>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-checkbox v-model="userCursoSuperior" label="Possuo curso superior"></v-checkbox>
        <v-select v-if="userCursoSuperior == true" v-model="userInterest" :rules="userInterestRules" :items="itemsSuperior" label="Interesse em algum curso?" filled required/>
        <v-select v-if="userCursoSuperior == false" v-model="userInterest" :rules="userInterestRules" :items="itemsNaoSuperior" label="Interesse em algum curso?" filled required/>
        <v-btn block color="secondary" class="mb-4" @click="validateSurvey">Validar</v-btn>
      </v-form> 
  </v-flex>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'PesquisaLayout',
    data () {
        return {
            valid: true,
            userCursoSuperior: false,
            userInterest: null,
            userInterestRules: [
               v => !!v || 'Por favor, selecione um item',
            ],
            itemsNaoSuperior: [],
            itemsSuperior: [],
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
      validateSurvey() {
          if (this.$refs.form.validate()) {
              // eslint-disable-next-line
              console.log("Dados preenchidos corretamente!");
              this.$emit('valid-data')
          } else {
                // eslint-disable-next-line
              console.log("Dados Inválidos");
          }
      },
    },
}
</script>

<style>

</style>