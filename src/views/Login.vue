<template>
    <div class="login">
        <v-container>
            <v-form v-model="valid">
                <v-text-field v-model="email" :rules="emailRules" label="Email" prepend-inner-icon="mdi-email" filled required></v-text-field>
                <v-text-field v-model="password" :type="showPass ? 'text' : 'password'" :rules="passwordRules" label="Senha" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" prepend-inner-icon="mdi-key" @click:append="showPass = !showPass" filled required></v-text-field>
                <v-btn large outlined block tile color="primary"><v-icon left>mdi-login</v-icon>Entrar</v-btn>
            </v-form>
        </v-container>
    </div>
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
}
</script>

<style>

</style>