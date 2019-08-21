<template>
  <v-flex>
      <v-form>
        <v-checkbox v-model="checkbox" label="Possuo curso superior"></v-checkbox>
        <v-select v-if="checkbox == true" v-model="select" :items="itemsSuperior" label="Interesse em algum curso?" filled required/>
        <v-select v-if="checkbox == false" v-model="select" :items="itemsNaoSuperior" label="Interesse em algum curso?" filled required/>
      </v-form> 
  </v-flex>
</template>

<script>
export default {
    name: 'PesquisaLayout',
    data () {
        return {
            checkbox: false,
            select: 'Nenhum',
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
}
</script>

<style>

</style>