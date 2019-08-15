<template>
    <v-container>

        <!-- tabela -->
        <v-row>
            <v-col cols="12">
                <ConsultaTabela />     
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ConsultaTabela from "../components/consulta/ConsultaTabela.vue"

export default {
    name: "Produto",
    components: {
        ConsultaTabela,
    },
}
</script>

<style>

</style>