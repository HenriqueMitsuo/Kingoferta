<template>
  <div class="home">
    <v-carousel height="300" cycle :hide-delimiters='true'>
      <v-carousel-item :src="slide.src"  v-for="(slide) in slides" :key="slide.number" />    
    </v-carousel>
    <v-container class="pr-0 pl-0" fluid>
      <v-row>
        <v-col v-for="statistic in statistics" :key="statistic.text" cols="6">
          <v-card class="primary" outlined dark>
              <v-list-item four-line>
                <v-list-item-content class="align-self-end">
                  <v-list-item-title class="headline mb-2">{{ statistic.quantity }}</v-list-item-title>
                  <v-list-item-subtitle class="overline">{{ statistic.text }}</v-list-item-subtitle>         
                </v-list-item-content>               
                <v-icon class="align-self-end">{{ statistic.icon }}</v-icon>
              </v-list-item>
              <v-card-actions></v-card-actions>
          </v-card>   
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="primary" to="/consulta/produto/1" block><v-icon>mdi-magnify</v-icon> Procurar</v-btn>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      preferredCourse: '',
      route: '/consulta/produto/2',
      statistics: [
        {icon: 'mdi-city-variant', quantity: '7', text: "Cidades"},
        {icon: 'mdi-store', quantity: '14', text: "Lojas"},
        {icon: 'mdi-baguette', quantity: '220', text: "Produtos"},
        {icon: 'mdi-cash-usd', quantity: '7', text: "Cotações"},
      ],
      slides: [
        {order: '1', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
        {order: '2', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
        {order: '3', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',},
        {order: '4', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',},    
      ]
    }
  },
  created() {
    this.preferredCourse = this.$route.params.curso;
  }
}
</script>
