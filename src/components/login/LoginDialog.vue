<template>
    <div class="login">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn depressed color="green" block dark v-on="on"><v-icon left>mdi-account</v-icon>Conta</v-btn>
            </template>                  
            <LoginLayout v-on:close-dialog="dialog = false"/> 
        </v-dialog>     
    </div>
</template>

<script>
import LoginLayout from './LoginLayout'

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