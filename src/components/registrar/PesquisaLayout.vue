<template>
  <v-flex>
      <v-form>
        <v-checkbox v-model="checkbox" label="Possuo curso superior"></v-checkbox>
        <v-select v-model="select" :items="itemsNaoSuperior" label="Interesse em algum curso?" filled required/>
      </v-form> 
  </v-flex>
</template>

<script>
export default {
    name: 'PesquisaLayout',
    data () {
        return {
            checkbox: true,
            select: 'Nenhum',
            itemsNaoSuperior: [
              'Administração - Presencial',
              'Análise e Des. de Sistemas - Presencial'
            ]
        }
    },
}
</script>

<style>

</style>