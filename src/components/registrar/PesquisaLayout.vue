<template>
  <v-flex>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-checkbox v-model="userCursoSuperior" label="Possuo curso superior"></v-checkbox>
        <v-select v-if="userCursoSuperior == true" v-model="userInterest" :rules="userInterestRules" :items="itemsSuperior" label="Interesse em algum curso?" filled required/>
        <v-select v-if="userCursoSuperior == false" v-model="userInterest" :rules="userInterestRules" :items="itemsNaoSuperior" label="Interesse em algum curso?" filled required/>
        <v-btn tile outlined block color="secondary" class="mb-4" @click="validateSurvey">Validar</v-btn>
      </v-form> 
  </v-flex>
</template>

<script>
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
            itemsNaoSuperior: [
              'Administração - Presencial',
              'Análise e Des. de Sistemas - Presencial',
              'Biologia - Presencial',
              'Direito - Presencial',
              'Enfermagem - Presencial',
              'Letras - Presencial/EAD',
              'Matemática - Presencial',
              'Nenhum'
            ],
            itemsSuperior: [
              'Gestão Hospitalar - Presencial',
              'Processos Gerencias - Presencial',
              'Nenhum'
            ]
        }
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
      }
    },
}
</script>

<style>

</style>