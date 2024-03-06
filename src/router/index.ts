import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from '../views/StockView.vue'
import ProductView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PromotionView from '../views/PromotionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stock',
      name: 'stock',
      component: StockView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: PromotionView
    }
    
  ]
})

export default router
