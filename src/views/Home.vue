<template>
  <div class="home">
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Peruíbe</div>
          <v-list-item-title class="headline mb-1"><span class="font-weight-light">King</span><span>Ofertas</span></v-list-item-title>
          <v-list-item-subtitle>Aplicativo para cotação de preços</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="90">
          <img src="..\assets\Logo_KingOferta.png" alt="" srcset="">
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions></v-card-actions>
    </v-card>

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
      route: '/consulta/produto/2',
      statistics: [
        {icon: 'mdi-city-variant', quantity: '7', text: "Cidades"},
        {icon: 'mdi-store', quantity: '14', text: "Lojas"},
        {icon: 'mdi-baguette', quantity: '220', text: "Produtos"},
        {icon: 'mdi-cash-usd', quantity: '7', text: "Cotações"},
      ],
    }
  },
  components: {

  }
}
</script>
