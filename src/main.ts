import { createApp } from 'vue';
import { VuesticPlugin } from 'vuestic-ui';
import 'vuestic-ui/dist/vuestic-ui.css';
import App from './App.vue';

createApp(App).use(VuesticPlugin).mount("#app");
