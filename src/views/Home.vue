<template>
  <div class="home">
    <v-carousel height="300" cycle :hide-delimiters='true'>
      <v-carousel-item :src="courseImages[image.order]"  v-for="(image) in courseImages" :key="image.order" />    
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
import Axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      objectUrl: '',
      courseImages: [],
      preferredCourse: '',
      isGraduated: '',
      route: '/consulta/produto/2',
      statistics: [
        {icon: 'mdi-city-variant', quantity: '7', text: "Cidades"},
        {icon: 'mdi-store', quantity: '14', text: "Lojas"},
        {icon: 'mdi-baguette', quantity: '220', text: "Produtos"},
        {icon: 'mdi-cash-usd', quantity: '7', text: "Cotações"},
      ],
    }
  },
  created() {
    this.preferredCourse = localStorage.getItem('preferredCourse');
    this.isGraduated = localStorage.getItem('isGraduated');

    let data = JSON.stringify({
      preferredCourse: this.preferredCourse,
      isGraduated: this.isGraduated
    });

    // FETCH DE IMAGENS (lógica funcionando, falta arrumar o cors)
    const url = 'http://unisepe-cotacao.gearhostpreview.com/pst_api/consultaImagens.php';
    Axios.post(url, data)
      .then((Response) => {
        console.log(Response.data);

        // Requestando e guardando imagem com fetch
        var i = 0;
        var id_counter = 0;
        while (i < Response.data.length) {
          fetch(Response.data[i])
          .then((response) => {
            return response.blob();
          })
          .then((myBlob) => {
            var objectUrl = URL.createObjectURL(myBlob);     
            this.courseImages.push({order: id_counter, src: objectUrl});     
            id_counter++;
          });
          i++;
        }   
  
      })

    // this.imagesUrls = [
    //   'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //   'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    //   'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    //   'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    // ]; 

  }
}
</script>
