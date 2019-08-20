<template>
  <div>
      <v-stepper v-model="e1">

          <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Registrar dados</v-stepper-step>
              <v-divider/>
              <v-stepper-step :complete="e1 > 2" step="2">Responder pesquisa</v-stepper-step>
              <v-divider/>
              <v-stepper-step step="3">Concluir cadastro</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
              <v-stepper-content step="1">
                  <h1>Registrar Dados</h1>
                  <v-btn color="primary" @click="e1 = 2">Continuar</v-btn>
                  <v-btn text>Cancelar</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                  <h1>Responder pesquisa</h1>
                  <v-btn color="primary" @click="e1 = 3">Continuar</v-btn>
                  <v-btn text>Cancelar</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                  <h1>Concluir cadastro</h1>
                  <v-btn color="primary">Continuar</v-btn>
                  <v-btn text>Cancelar</v-btn>
              </v-stepper-content>

          </v-stepper-items>

      </v-stepper>
  </div>
</template>

<script>
export default {
    data () {
        return {
            e1: 0,
        }
    },
}
</script>

<style>

</style>