import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from '../views/StockView.vue'
import ProductView from '../views/ProductsView.vue'


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
    }
    
  ]
})

export default router
