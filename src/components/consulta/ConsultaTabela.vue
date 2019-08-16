<template>
  <v-card>
    <v-card-title>
        <h3>Cotação</h3> 
        <v-spacer></v-spacer>
        <v-text-field
            v-model="filters.name"
            append-icon="mdi-magnify"
            label="Name"
            single-line
            hide-details>
        </v-text-field>
        <v-spacer></v-spacer>
        <!-- <v-select
            append-icon="mdi-magnify"
            v-model="filters.cidade"
            :items="produtos"
            item-text="cidade"
            item-value="cidade"
            label="Cidades"
            single-line
            hide-details>
        </v-select> -->
        <v-text-field
            v-model="cidade"
            append-icon="mdi-magnify"
            label="cidade"
            single-line
            hide-details>
        </v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="produtos"
      item-key="id"
      :search="filters.name">
    </v-data-table>
  </v-card>
</template>

<script>
import Placeholder from "./cotacao.json"
export default {
    name: 'ConsultaTabela',
    data() {
        return {
            filters: { nome: '', local_nome: '', local_estabelecimento: '', cidade: '' },
            cidade: '',
            produtos: [],
        }
    },
    created () {
        this.produtos = Placeholder;
    },
    computed: {
        headers () {
            return [
                { text: 'Produto', align: 'left', sortable: false, value: 'nome' },
                { text: 'Preço', value: 'preco' },
                { text: 'Local Nome', value: 'local' },
                { text: 'Local Estabelecimento', value: 'local_tipo' },
                { text: 'Cidade', value: 'cidade',  }
            ]
        },
    },
}
</script>

<style>

</style>