<template>
  <v-card>
    <v-card-title>
        <h3>Cotação</h3> 
        <v-spacer></v-spacer>
        <v-text-field
            v-model="filters.name"
            append-icon="mdi-magnify"
            label="Produto, Cidade, Estabelecimento"
            single-line
            hide-details>
        </v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="produtos"
      item-key="id"
      :search="filters.name"
      :loading="loading"
      loading-text="Carregando..."
      items-per-page=10
      mobile-breakpoint=400>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    name: 'ConsultaTabela',
    data() {
        return {
            filters: { nome: '', local_nome: '', local_estabelecimento: '', cidade: '' },
            cidade: '',
            produtos: [],
            loading: 'true'
        }
    },
    async created () {
        await fetch("http://cotapreco.iesep.com.br/pst_api/consultacotacao.php")
            .then(Response => {
                return Response.json();
            })
            .then(Data => {
                return this.produtos = Data;
            })
            .then(() => {
                return this.loading = 'false'
            })
    },
    computed: {
        headers () {
            return [
                { text: 'Produto', align: 'left', sortable: false, value: 'nome' },
                { text: 'Local', value: 'estabelecimento' },
                { text: 'Preço', value: 'valor' },
                { text: 'Unidade', value: 'tipo' },
            ]
        },
    },
}
</script>

<style>

</style>