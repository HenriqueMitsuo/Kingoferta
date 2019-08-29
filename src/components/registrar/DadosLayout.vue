<template>
    <div class="dados">
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="userName" :rules="userNameRules" label="Nome" prepend-inner-icon="mdi-account" filled required></v-text-field>   
            <v-text-field v-model="userEmail" :rules="userEmailRules" label="Email" prepend-inner-icon="mdi-email" filled required></v-text-field>     
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="userDate" persistent full-width width="290px">
                <template v-slot:activator="{ on }"><v-text-field v-model="userDate" :rules="userDateRules" label="Data de nascimento" prepend-inner-icon="mdi-calendar-range" filled readonly v-on="on" required></v-text-field></template>
                <v-date-picker locale="pt-br" v-model="userDate" scrollable>
                    <v-spacer/>
                    <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(userDate)">OK</v-btn>
                </v-date-picker>            
            </v-dialog>
            <v-select v-model="userGender" :rules="userGenderRules" :items="items" label="Gênero" prepend-inner-icon="mdi-human-male-female" filled required></v-select>
            <v-text-field v-model="userCellphone" :rules="userCellphoneRules" v-mask="maskPhone" label="Celular" prepend-inner-icon="mdi-contact-phone" filled required></v-text-field>
            <v-text-field v-model="userPassword" :rules="userPasswordRules" :type="showPass ? 'text' : 'password'" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPass = !showPass" label="Senha" filled prepend-inner-icon="mdi-key" required></v-text-field>
            <v-btn block color="success" class="mb-4" @click="validateData">Continuar</v-btn>
        </v-form>  
        <v-snackbar :color="snackColor" v-model="snackbar" :timeout="timeout">{{ snackText }}</v-snackbar>      
    </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import Axios from 'axios'

export default {
    name: 'DadosLayout',
    data: () => ({
        snackbar: false,
        snackColor: '',
        snackText: '',
        timeout: 2000,
        valid: true,
        userName: '',
        userNameRules : [
            v => !!v || 'Por favor, preencha seu nome', 
        ],
        userEmail: '',
        userEmailRules: [
            v => !!v || 'Por favor, preencha seu e-mail',
            v => /.+@.+\..+/.test(v) || 'E-mail não é válido',
        ],
        userDate: null,
        userDateRules: [
            v => !!v || 'Por favor, identifique a data de nascimento',
        ],
        userGender: null,
        userGenderRules: [
            v => !!v || 'Por favor, selecione um item',
        ],
        userCellphone: '',
        userCellphoneRules: [
            v => !!v || 'Por favor, preencha seu celular',
        ],
        userPassword: '',
        userPasswordRules: [
            v => !!v || 'Por favor, digite uma senha',
        ],
        modal: false,
        showPass: false,
        maskPhone: '(##) #####-####',
        items: [
            'Masculino',
            'Feminino',
            'Prefiro não dizer'
        ],
    }),
    directives: {
        mask,
    },
    methods: {
        validateData : async function() {
            if (this.$refs.form.validate()) {

                // Enviando dados com axios
                const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/loginRegister.php';
                const data = JSON.stringify({
                    sendName: this.userName,
                    sendEmail: this.userEmail,
                    sendBirthDate: this.userDate,
                    sendGender: this.userGender,
                    sendPhone: this.userCellphone,
                    sendPassword: this.userPassword,
                });

                await Axios.post(url, data)
                .catch((err) =>{
                    // eslint-disable-next-line
                    console.log(err);
                    this.snackColor = 'warning';
                    this.snackText = 'Erro de conexão! Tentar novamente.';
                    this.snackbar = true;  
                })
                .then(Response => {
                    // eslint-disable-next-line
                    console.log(Response.data);
                    if (Response.data == 'sucesso') {
                        this.$emit('valid-data');
                    } else {
                        this.snackColor = 'warning';
                        this.snackText = 'Erro de conexão! Tentar novamente.';
                        this.snackbar = true;  
                    }
                });

                

            }
        },
    }
}
</script>

<style>

</style>