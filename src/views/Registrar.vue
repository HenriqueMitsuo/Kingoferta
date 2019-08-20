<template>
  <div>
      <v-stepper dark class="primary elevation-0" v-model="e1">

          <v-stepper-header class="elevation-0">
              <v-stepper-step color="accent" :complete="e1 > 1" step="1">Registrar dados</v-stepper-step>
              <v-divider/>
              <v-stepper-step color="accent" :complete="e1 > 2" step="2">Responder pesquisa</v-stepper-step>
              <v-divider/>
              <v-stepper-step color="accent" step="3">Concluir cadastro</v-stepper-step>
          </v-stepper-header>

          <v-divider/>

          <v-stepper-items>
              <v-stepper-content step="1">
                 <DadosLayout />        
              </v-stepper-content>

              <v-stepper-content step="2">
                  <v-btn color="primary" @click="e1 = 3">Continuar</v-btn>
                  <v-btn text>Cancelar</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                  <v-btn color="primary">Concluir</v-btn>
                  <v-btn text>Cancelar</v-btn>
              </v-stepper-content>

          </v-stepper-items>

      </v-stepper>
  </div>
</template>

<script>
import DadosLayout from '../components/registrar/DadosLayout'

export default {
    data () {
        return {
            e1: 0,
        }
    },
    components: {
        DadosLayout,
    },
}
</script>

<style>

</style>