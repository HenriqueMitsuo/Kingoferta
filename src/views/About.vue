<template>
  <div class="about">
    <v-list class="text-center" three-line>
      <v-avatar size="128">
        <img src="../assets/Logo_KingOferta.png" alt="avatar">
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"><span class="font-weight-light">King</span><span>Ofertas</span></v-list-item-title>
          <v-list-item-subtitle>Aplicativo para cotação de preços</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider/>

    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Versão</v-list-item-title>
          <v-list-item-subtitle>1.0.0</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="developer in developers" :key="developer.name">
        <v-list-item-content>
          <v-list-item-title class="overline">{{ developer.name }}</v-list-item-title>
          <v-list-item-subtitle class="body-1"><v-icon color="primary" class="pr-1">mdi-github-box</v-icon><a :href="developer.github" target="_blank">{{ developer.github }}</a></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      developers: [
        {name: 'Henrique Mitsuo', github: 'https://github.com/HenriqueMitsuo'},
        {name: 'Jonas Lima', github: 'https://github.com/JonasGabriel'},
        {name: 'Moisés Duarte', github: 'https://github.com/MoisesDuarte'}
      ]
    }
  }
}
</script>

<style>

</style>
