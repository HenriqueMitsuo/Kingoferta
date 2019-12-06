<template>
  <nav>
    <v-app-bar flat color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <span class="font-weight-light">King</span>
            <span>Ofertas</span>        
        </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="primary" app temporary>
        <v-list-item> 
            <v-list-item-content>
                <v-img src="..\assets\Logo_KingOferta.png"></v-img>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item dark two-line>
            <v-btn block color="red" depressed to="/">Sair</v-btn>
        </v-list-item>   
    
        <v-list-item-group color="secondary">
            <v-list-item v-for="link in links" :key="link.text" :to="link.route" dark>
                <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-navigation-drawer>

  </nav>
</template>

<script>
//import LoginDialog from './login/LoginDialog'

export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Home', route: '/home'},
                {icon: 'mdi-magnify', text: 'Consulta', route: '/consulta'},
                {icon: 'mdi-cart', text: 'Carrinho', route: '/carrinho'},
                {icon: 'mdi-information', text: 'Sobre', route: '/about'},
            ]
        }
    },
    components: {
        //LoginDialog,
    }
}
</script>

<style>

</style>