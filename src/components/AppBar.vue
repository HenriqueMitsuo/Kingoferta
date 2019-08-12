<template>
  <div>
    <v-app-bar flat color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <span class="font-weight-light">King</span>
            <span>Ofertas</span>        
        </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="deep-purple" app>
        <v-list-item>
            <v-list-item-content>
                <v-img src="..\assets\Logo_KingOferta.png"></v-img>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group color="deep-purple accent-1">
            <v-list-item v-for="link in links" :key="link.text" :to="link.route" dark>
                <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Home', route: '/'},
                {icon: 'mdi-information', text: 'About', route: '/about'},
            ]
        }
    }
}
</script>

<style>

</style>