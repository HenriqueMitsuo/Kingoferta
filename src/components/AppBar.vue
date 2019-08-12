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
        <v-list-item-group color="deep-purple accent-1">
            <v-list-item to="/" dark>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about" dark>
            <v-list-item-content>
                <v-list-item-title router:to="/about">About</v-list-item-title>
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
            drawer: false
        }
    }
}
</script>

<style>

</style>