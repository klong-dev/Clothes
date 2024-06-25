import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewProduct from '../views/ViewProduct.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/xem-san-pham/:id/:name/:price/:sale/:imgPath/:description',
      name: 'view-product',
      component: ViewProduct,
    },
  ]
})

export default router
