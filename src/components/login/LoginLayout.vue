<template>
    <v-card class="primary justify center">
        <v-app-bar flat dark color="primary">
            <v-btn icon dark v-on:click="closeDialog"><v-icon>mdi-close</v-icon></v-btn>
        </v-app-bar>
        <v-container class="pa-6">
            <v-form v-model="valid">
                <v-text-field v-model="email" :rules="emailRules" label="Email" prepend-inner-icon="mdi-email" solo required></v-text-field>
                <v-text-field v-model="password" :type="showPass ? 'text' : 'password'"  label="Senha" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" prepend-inner-icon="mdi-key" @click:append="showPass = !showPass" solo required></v-text-field>
                <v-btn rounded large block color="green" dark><v-icon left>mdi-login</v-icon>Entrar</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => (
        {
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
        }
    }
}
</script>

<style>

</style>
