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
                <v-btn rounded class="mb-2" :loading="loading" :disabled="loading" large block color="green" @click="sendLogin" dark><v-icon left>mdi-login</v-icon>Entrar</v-btn>          
                <RegistrarDialog />
            </v-form>
        </v-container>
    </v-card>
    <v-snackbar :color="snackColor" v-model="snackbar" :timeout="timeout">{{ snackText }}</v-snackbar>
    </v-overlay>
</template>

<script>
import RegistrarDialog from '../registrar/RegistrarDialog'
import Axios from 'axios'

export default {
    data: () => (
        {
            loading: false,
            overlay: true,
            valid: false,
            showPass: false,
            email: '',
            name: 'teste',
            password: '',
            emailRules: [
                v => !!v || 'Email é necessário',
                v => /.@.+/.test(v) || 'Email inválido'
            ],
            snackbar: false,
            snackColor: '',
            snackText: '',
            timeout: 2000,
        }
    ),
    
    methods: {
        closeDialog : function() {
            this.$emit('close-dialog')
        },
         sendLogin : async function() {
            this.loading = true;

            const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/loginValidacao.php';
            let data = JSON.stringify({
                email: this.email,
                password: this.password
            });

            await Axios.post(url, data)
            .catch((err) => {
                // eslint-disable-next-line
                console.log("Axios Error: ", err);
                this.loading = false;
                this.snackColor = 'warning';
                this.snackText = 'Erro de conexão!';
                this.snackbar = true;
            })
            .then(Response => {
              if (Response.data == 'ok') { 
                this.loading = false;
                this.$router.push({name: 'home'});
              } else if (Response.data != 'ok') {
                  this.loading = false;
                  this.snackColor = 'red';
                  this.snackText = 'Credenciais incorretas!';
                  this.snackbar = true;               
              }
            });
            
            
         }
    },
    components: {
        RegistrarDialog,
    },    
}
</script>

<style>
 @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
