<template>
    <v-list elevation="2">
        <v-subheader>Categorias</v-subheader>
        <v-list-item-group>
            <v-list-item v-for="category in categories" :key="category.name" color="primary" >
                <v-list-item-avatar>
                    <v-icon>{{category.icon}}</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{category.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: 'ConsultaLayout',
    data() {
        return {
            categories: [
                {name: 'Mercado', icon: 'mdi-cart', sub_category:[]},
                {name: 'Farmácia', icon: 'mdi-pharmacy', sub_category:[ {name: 'antibiótico'}, {name: 'analgésico'}, {name: 'anfetamina'} ]},
                {name: 'Padaria', icon: 'mdi-bread-slice', sub_category:[]},
                {name: 'Papelaria', icon: 'mdi-newspaper', sub_category:[]},
                {name: 'Posto de Combustivel', icon: 'mdi-gas-station', sub_category:[]},
                {name: 'jonas', icon:'mdi-home', sub_category:[]}
            ],
            img: require('../../assets/Logo_KingOferta.png')
        }
    },
}
</script>

<style>

</style>