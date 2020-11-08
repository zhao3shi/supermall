import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component: Home
      },
      {
        path:'/profile',
        component: Profile
      },
      {
        path:'/shopcart',
        component: Shopcart
      },
      {
        path:'/category',
        component: Category
      }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router