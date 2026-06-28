import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PricingPage from '../pages/PricingPage.vue';
import TopupPage from '../pages/TopupPage.vue';
import DashboardPage from '../pages/DashboardPage.vue';
import FaqPage from '../pages/FaqPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/pricing', component: PricingPage },
  { path: '/topup', component: TopupPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/faq', component: FaqPage },
  { path: '/about', component: AboutPage }
];

export default createRouter({ history: createWebHistory(), routes });
