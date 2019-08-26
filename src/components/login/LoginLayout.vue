<template>
    <v-overlay color="primary" :value="overlay" opacity="1">

        <v-card flat class="primary justify center">
        <!-- <v-app-bar flat dark color="primary">
            <v-btn icon dark v-on:click="closeDialog"><v-icon>mdi-close</v-icon></v-btn>
        </v-app-bar> -->
        <v-row align="center" justify="center">
            <v-img max-width="250" max-height="250" src="./../../assets/Logo_KingOferta.png"></v-img>
        </v-row>
        <v-container class="pa-6">          
            <v-form v-model="valid">
                <v-text-field v-model="email" :rules="emailRules" label="Email" prepend-inner-icon="mdi-email" outlined required></v-text-field>
                <v-text-field v-model="password" :type="showPass ? 'text' : 'password'"  label="Senha" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" prepend-inner-icon="mdi-key" @click:append="showPass = !showPass" outlined required></v-text-field>
                <div class="mb-2">
                    <v-btn rounded large block color="green" @click="sendLogin" dark><v-icon left>mdi-login</v-icon>Entrar</v-btn>
                </div>
                <!-- <v-btn rounded large block color="accent" to="/registrar" dark><v-icon left>mdi-pencil</v-icon>Registrar</v-btn> -->
                <RegistrarDialog />
            </v-form>
        </v-container>
    </v-card>
    </v-overlay>
</template>

<script>
import RegistrarDialog from '../registrar/RegistrarDialog'
import Axios from 'axios'

export default {
    data: () => (
        {
            overlay: true,
            valid: false,
            showPass: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'Email é necessário',
                v => /.@.+/.test(v) || 'Email inválido'
            ]
        }
    ),
    methods: {
        closeDialog : function() {
            this.$emit('close-dialog')
        },
         sendLogin : async function() {
            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/loginValidacao.php';
            const response = await Axios.post(proxyurl + url, {email: this.email, password: this.password});
            
            if (response.data == 'ok') {
                //console.log('Login Validado!');
                window.location.assign('#/home');
            } else {
                //console.log('Login Inválido!');
            }
         }
    },
    components: {
        RegistrarDialog,
    },
    
}
</script>

<style>

</style>
