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
            <!-- <v-expansion-panel v-for="estabelecimento in estabelecimentos" :key="estabelecimento">
                <v-expansion-panel-header class="indigo lighten-1">
                <p class="title font-weight-bold text-center grey--text text--lighten-3">Carrinho {{estabelecimento[1]}}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <v-card v-if="carrinho" class="mt-4">
                    <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">Produtos - {{estabelecimento[1]}}</v-card-title>
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
                                    <tr v-for="produto in estabelecimento[0]" :key="produto.nome">
                                        <td>{{ produto.nome }}</td>
                                        <td>R$ {{ produto.valor }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                    
                </v-card>
                <v-sheet tile elevation="7" color="primary" class="mt-1">
                        <p class="text-center subtitle-1 grey--text text--lighten-3"> {{estabelecimento[1]}} -  Total - R$ {{estabelecimento[2]}}</p>
                </v-sheet>
                </v-expansion-panel-content>
            </v-expansion-panel> -->

            <!-- <v-expansion-panel>
                <v-expansion-panel-header class="">
                <p class="title font-weight-bold text-center">Carrinho Tio Beba</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <v-card v-if="carrinho" class="mt-4">
                    <v-card-title class="headline grey--text text--lighten-4">Produtos - Tio Beba</v-card-title>
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
                                    <tr v-for="produto in carrinho" :key="produto.nome">
                                        <td>{{ produto.nome }}</td>
                                        
                                        <td>R$ {{ produto.preco }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                    
                </v-card>
                <v-sheet tile elevation="7" color="primary" class="mt-1">
                        <p class="text-center subtitle-1 grey--text text--lighten-3">Estabelecimento - Tio Beba Total - R$ ###.##</p>
                </v-sheet>
                </v-expansion-panel-content>
            </v-expansion-panel> -->
        </v-expansion-panels>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data() {
        return {
            loading: false,
            filtro: [],
            produtos: ['Bisteca Bovina', 'Arroz', 'Feijão', 'Farinha de Trigo', 'Açúcar', 'Fubá'],
            carrinho: [],
            estabelecimentos: [],
        }
    },
    methods: {

        fetchProdutos: async function() {

            this.loading = !this.loading;

            const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/consultacarrinho.php';
            const data = JSON.stringify({
                postFiltro: this.filtro
            });

            await Axios.post(url, data)
                .then(Response => {
                    console.log(Response.data[1][0]);
                    this.loading = !this.loading;
                    this.estabelecimentos = Response.data[1];

                    return this.carrinho = Response.data[0];
                })
        }
    },

}
</script>

<style>

</style>