import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes'
import Vue from 'vue';
import VueChartJs from 'vue-chartjs';

createApp(App).use(routes).mount('#app')

Vue.use(VueChartJs);