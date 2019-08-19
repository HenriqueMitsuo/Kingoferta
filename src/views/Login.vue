<template>
    <div class="login">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }"><v-btn color="primary" dark v-on="on">Open Dialog</v-btn></template>                  
            <LoginLayout v-on:close-dialog="dialog = false"/> 
        </v-dialog>     
    </div>
</template>

<script>
import LoginLayout from '../components/login/LoginLayout'

export default {
    name: 'login',
    components: {
        LoginLayout,
    },
    data () {
        return {
            dialog: false,
        }
    }
}
</script>

<style>

</style>