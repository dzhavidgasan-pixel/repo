import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
import '@tonconnect-ui/sdk/assets/fonts.css';
import './assets/tailwind.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
