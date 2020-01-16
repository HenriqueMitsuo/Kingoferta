<template>
    <div>
        <v-card >
            <v-card-title class="headline grey--text text--lighten-4 indigo darken-1">Carrinho de produtos</v-card-title>
                <div>
                    <v-card-text>
                        <v-autocomplete
                        label="Seleção de produtos"
                        dense
                        multiple
                        clearable
                        chips
                        v-model="filtro"
                        :items="produtos"></v-autocomplete>
                    </v-card-text>
                    <v-card-actions class="mt-0 pt-0">
                        <v-btn outlined block :loading="loading" color="primary" @click="fetchProdutos">
                            <v-icon>mdi-magnify</v-icon> 
                            pesquisa
                        </v-btn>
                    </v-card-actions>
                </div>
        </v-card>

        <v-divider class="py-2"></v-divider>

        <v-card v-if="carrinho">
            <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">Carrinho - Geral</v-card-title>
            <div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Produto</th>
                                <th class="text-left">Local</th>
                                <th class="text-left">Preço R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="produto in carrinho" :key="produto.nome">
                                <td>{{ produto.nome }}</td>
                                <!-- @TODO: ajustar a nomeclatura padrão -->
                                <td>{{ produto.estabelecimento }}</td>
                                <td>{{ produto.valor }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-card>
        <v-sheet tile elevation="7" color="primary" class="mt-1 mb-12">
                <!-- <p class="text-center subtitle-1 grey--text text--lighten-3"></p> -->
        </v-sheet>

        <v-expansion-panels accordion inset>
            <v-expansion-panel v-for="estabelecimentosNome in estabelecimentosNomes" :key="estabelecimentosNome.total">
                <v-expansion-panel-header class="indigo lighten-1">
                    <p class="title font-weight-bold text-center grey--text text--lighten-3">Carrinho {{estabelecimentosNome.estabelecimento_nome}}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card v-if="carrinho" class="mt-4">
                        <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">Produtos - {{estabelecimentosNome.estabelecimento_nome}}</v-card-title>
                        <div>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">Produto</th>
                                            <th class="text-left">Preço R$</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="produto in estabelecimentos" 
                                        v-if="produto.estabelecimento == estabelecimentosNome.estabelecimento_nome" :key="produto.valor" >
                                            <td>{{ produto.nome }}</td>
                                            <td>{{ produto.valor }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </div>
                    </v-card>
                    <v-sheet tile elevation="7" color="primary" class="mt-1">
                            <p class="text-center subtitle-1 grey--text text--lighten-3"> {{estabelecimentosNome.estabelecimento_nome}} -  Total - R$ {{estabelecimentosNome.total}}</p>
                    </v-sheet>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import Axios from 'axios';
/* eslint-disable */
export default {
    data() {
        return {
            loading: false,
            filtro: [],
            produtos: ['Bisteca Bovina', 'Arroz', 'Feijão', 'Óleo de soja', 'Açúcar', 'Sal', 'Café', 'Molho de tomate', 'Macarrão'],
            carrinho: [],
            estabelecimentos: [],
            estabelecimentosNomes: [],
        }
    },
    methods: {

        fetchProdutos: async function() {

            this.loading = !this.loading;

            const urlProdutos = 'http://cotapreco.iesep.com.br/pst_api/consultacarrinho.php';
            const urlEstabelecimentos = 'http://cotapreco.iesep.com.br/pst_api/consultaestabelecimentos.php';

            const data = JSON.stringify({
                postFiltro: this.filtro
            });

            // @FETCH CARRINHO GERAL
            await Axios.post(urlProdutos, data)
                .then(Response => {

                    return this.carrinho = Response.data;
                });

            // @FETCH CARRINHO ESTABELECIMENTOS
            await Axios.post(urlEstabelecimentos, data)
                .then(Response => {
                    
                    let teste = [];
                    let teste1 = [];

                    teste = Response.data;
                    teste1 = Response.data;

                    this.estabelecimentosNomes = teste1.pop();
                    this.estabelecimentos = teste;
                    //this.estabelecimentos.pop();
                });

            console.log(this.estabelecimentos);
            console.log(this.estabelecimentosNomes);

            this.loading = !this.loading;
        }
    },

}
</script>

<style>

</style>