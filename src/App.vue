<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',
  components: { AppBar },
  data () {
    return {

    }
  }
}
</script>>