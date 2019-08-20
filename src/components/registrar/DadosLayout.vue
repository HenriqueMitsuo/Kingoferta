<template>
    <div class="dados">
        <v-flex>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" label="Nome" prepend-inner-icon="mdi-account" filled required />    
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent full-width width="290px">
                <template v-slot:activator="{ on }"><v-text-field v-model="date" label="Data de nascimento" prepend-inner-icon="mdi-calendar-range" filled readonly v-on="on"/></template>
                <v-date-picker locale="pt-br" v-model="date" scrollable>
                    <v-spacer/>
                    <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>            
            </v-dialog>
            <v-combobox v-model="select" :items="items" label="Gênero" prepend-inner-icon="mdi-human-male-female" filled required/>
            <v-text-field v-model="cellphone" label="Celular" prepend-inner-icon="mdi-contact-phone" filled required />
            <v-text-field v-model="password"  :type="showPass ? 'text' : 'password'" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPass = !showPass" label="Senha" filled prepend-inner-icon="mdi-key"/>
        </v-form>  
        </v-flex>
        
    </div>
</template>

<script>
export default {
    name: 'DadosLayout',
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        modal: false,
        showPass: false,
        select: 'Selecionar',
        items: [
            'Masculino',
            'Feminino',
        ]
    }),
}
</script>

<style>

</style>