<template>
  <div id="app">
    <v-app>
      <AppBar />
      <router-view/>
    </v-app>
  </div>
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