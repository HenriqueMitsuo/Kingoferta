<template>
   <v-dialog v-model="dialog" persistent max-width="300">
      <v-card>
        <v-card-title class="headline">Vestibular 2020</v-card-title>
        <v-card-text> 
          As chamadas para o vestibular de 2020 já estão disponíveis no site da unisepe pelo seguinte endereço: 
          <br> <a href="http://portal.unisepe.com.br/univr/mural/vestibular-2020-chamada/">http://portal.unisepe.com.br/univr/mural/vestibular-2020-chamada/</a> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
        return {
            dialog: true,
        }   
    }
}
</script>

<style>

</style>