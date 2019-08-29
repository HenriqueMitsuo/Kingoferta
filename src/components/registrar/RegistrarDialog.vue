<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn rounded large block color="accent" dark v-on="on"><v-icon left>mdi-pencil</v-icon>Registrar</v-btn>
            </template>
            <v-card class="primary">
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
                            <DadosLayout v-on:valid-data="valid = true" />
                            <v-btn tile color="green" @click="e1 = 2, valid = false" :disabled="!valid">Continuar</v-btn>
                            <v-btn tile text @click="dialog = false">Cancelar</v-btn>
                        </v-stepper-content>
                        <v-stepper-content class="pa-6" step="2">
                            <PesquisaLayout v-on:valid-data="valid = true" />
                            <v-btn tile color="green" to="/home" :disabled="!valid">Continuar</v-btn>
                            <v-btn tile text @click="e1 = 1">Cancelar</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import DadosLayout from './DadosLayout'
import PesquisaLayout from './PesquisaLayout'

export default {
    data () {
        return {
            valid: false,
            e1: 0,
            dialog: false,
        }
    },
    components: {
        DadosLayout,
        PesquisaLayout,
    },
}
</script>

<style>

</style>