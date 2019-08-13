import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
      themes: {
        light: {
          primary: '#3949ab',
          secondary: '#f9a825',
          accent: '#F9B03A',
          error: '#f44336',
        }
      }  
  },
});
