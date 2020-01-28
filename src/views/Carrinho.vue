<template>
    <div>
        <v-card >
            <v-card-title class="headline grey--text text--lighten-4 indigo darken-1">carrinhos de produtos</v-card-title>
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

        <!-- <v-card v-if="carrinhos">
            <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">carrinhos - Geral</v-card-title>
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
                            <tr v-for="produto in carrinhos" :key="produto.nome">
                                <td>{{ produto.nome }}</td>
                                
                                <td>{{ produto.estabelecimento }}</td>
                                <td>{{ produto.valor }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-card> -->
        <v-sheet tile elevation="7" color="primary" class="mt-1 mb-12">
                <!-- <p class="text-center subtitle-1 grey--text text--lighten-3"></p> -->
        </v-sheet>

        <v-expansion-panels accordion inset>
            <v-expansion-panel v-for="(carrinho, index) in carrinhos" :key="index">
                <v-expansion-panel-header class="indigo lighten-1">
                    <p class="title font-weight-bold text-center grey--text text--lighten-3">carrinho {{carrinho[0]}}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card v-if="carrinhos" class="mt-4">
                        <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">Produtos - {{carrinho[0]}}</v-card-title>
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
                                        <tr v-for="(produto, index) in carrinho[2]" 
                                        :key="index" >
                                            <td>{{ produto.nome }}</td>
                                            <td>{{ produto.valor }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </div>
                    </v-card>
                    <v-sheet tile elevation="7" color="primary" class="mt-1">
                            <p class="text-center subtitle-1 grey--text text--lighten-3"> {{carrinho[0]}} -  Total - R$ {{carrinho[1]}}</p>
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
            produtos: ['Açúcar Refinado', 'Alface', 'Acetato de Dexamentasona', 'Achocolatado em pó', 'Bisteca Bovina', 'Cebola', 'Café torrado com selo Abic', 'Feijão Carioca', 'Farinha de Mandioca', 'Fubá', 'Geladeira', 'Maionese', 'Macarrão Instantâneo', 'Óleo de soja', 'Sal Refinado'],
            carrinhos: [],
            estabelecimentoDados: [],
            estabelecimentoProdutos: [],
        }
    },
    methods: {

        fetchProdutos: async function() {

            this.loading = !this.loading;
            
            const urlProdutos = 'http://cotapreco.iesep.com.br/pst_api/consultaCarrinho.php';
            const urlEstabelecimentos = 'http://cotapreco.iesep.com.br/pst_api/consultaestabelecimentos.php';

            const data = JSON.stringify({
                postFiltro: this.filtro
            });

            // @FETCH carrinhos
            await Axios.post(urlProdutos, data)
                .then(Response => {

                    return this.carrinhos = Response.data;
                });

                console.log(this.carrinhos);

            this.loading = !this.loading;
        }
    },

}
</script>

<style>

</style>