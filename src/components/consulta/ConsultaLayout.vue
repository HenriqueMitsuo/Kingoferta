<template>
    <v-container>
        <!-- align e justify centralizam o conteudo nno novo grid (Vuetify 2.0) -->
        <v-row align="center" justify="center">
            <!-- Nova forma de definir o numero de colunas utilizado em cada tamanho de tela -->
            <v-col md="6" lg="9"  xs="12" >
                <v-list elevation="2">
                    <v-subheader class="headline">Categorias</v-subheader>
                    <v-list-item-group>
                        <v-list-item v-for="category in categories" :key="category.name" color="primary" :to="{ name: 'Produto', params: { id: category.id } }">
                            <v-list-item-avatar>
                                <v-icon>{{category.icon}}</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{category.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>    
        </v-row>    
    </v-container>   
</template>

<script>
export default {
    name: 'ConsultaLayout',
    data() {
        return {
            categories: [
                {id: 1, name: 'Mercado', icon: 'mdi-cart'},
                {id: 2, name: 'Padaria', icon: 'mdi-bread-slice'},
                {id: 3, name: 'Farmácia', icon: 'mdi-pharmacy'},
                {id: 4, name: 'Papelaria', icon: 'mdi-newspaper'},
                {id: 5, name: 'Posto de Combustivel', icon: 'mdi-gas-station'}
            ]
        }
    },
}
</script>

<style>

</style>