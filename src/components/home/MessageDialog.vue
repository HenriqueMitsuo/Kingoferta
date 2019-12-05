<template>
   <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Título</v-card-title>
        <v-card-text>Corpo</v-card-text>
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