import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {firestorePlugin} from 'vuefire';

Vue.use(firestorePlugin);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
