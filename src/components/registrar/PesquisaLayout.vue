<template>
  <v-flex>
      <v-form>
        <v-checkbox v-model="checkbox" label="Possuo curso superior"></v-checkbox>
        <v-combobox label="Interesse em algum curso?" filled required/>
      </v-form> 
  </v-flex>
</template>

<script>
export default {
    name: 'PesquisaLayout',
    data () {
        return {
            checkbox: true,
        }
    },
}
</script>

<style>

</style>