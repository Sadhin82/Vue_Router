import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogView from '@/views/BlogView.vue'
import PostView from '@/views/PostView.vue'
import DasboardView from '@/views/DasboardView.vue'
import LoginView from '@/views/LoginView.vue'
const routes = [
  {
     path: '/', 
     name:'home',
     component: HomeView 
    },
    {
      path:'/about',
      name:'about',
      component:AboutView

    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView
    }
    ,
    {
      path:'/blog',
      name:'blog',
      component:BlogView
    },
    {
      path:'/post/:id',
      name:'Post',
      component:PostView
    },{
      path:'/dashboard',
      name:'dashboard',
      component:DasboardView,
      beforeEnter: (to, from, next) => {
        if(!localStorage.getItem('loggedIn')){
          next({name:'login'})
        }else{
          next()
        }
      }
    },{
      path:'/login',
      name:'login',
      component:LoginView,
      beforeEnter:(to,from,next)=>{
       if(localStorage.getItem('loggedIn')){
        next({name:'dashboard'})
       }else{
        next()
       }
      }

    }
  
    
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router
