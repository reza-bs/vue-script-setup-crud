
import { createApp } from 'vue';
import Veulidate from 'vuelidate';
import { VuesticPlugin } from 'vuestic-ui';
import 'vuestic-ui/dist/vuestic-ui.css';
import App from './App.vue';



createApp(App)
.use(Veulidate)
  .use(VuesticPlugin)
  .mount("#app");
