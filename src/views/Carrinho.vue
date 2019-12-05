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
                                <td>{{ produto.local }}</td>
                                <td>R$ {{ produto.preco }}</td>
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
            <v-expansion-panel >
                <v-expansion-panel-header class="indigo lighten-1">
                <p class="title font-weight-bold text-center grey--text text--lighten-3">Carrinho Magnanimo</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <v-card v-if="carrinho" class="mt-4">
                    <v-card-title class="headline grey--text text--lighten-4 indigo lighten-2">Produtos - Magnanimo</v-card-title>
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
                        <p class="text-center subtitle-1 grey--text text--lighten-3">Estabelecimento - Magnanimo Total - R$ ###.##</p>
                </v-sheet>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
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
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            produtos: ['Arroz', 'Feijão', 'Farinha de Trigo', 'Açúcar', 'Fubá', 'Cáfe'],
            filtro: [],
            carrinho: [
                {
                    nome: 'arroz',
                    preco: 23,
                    local: 'tio beba'
                },
                {
                    nome: 'feijão',
                    preco: 12,
                    local: 'Mercado B'
                },
                {
                    nome: 'fubá',
                    preco: 6.50,
                    local: 'magnanimo'
                }
            ]
        }
    },
    methods: {
        fetchProdutos() {
            
        }
    },

}
</script>

<style>

</style>