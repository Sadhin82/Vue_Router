<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
import { computed } from 'vue';

const logout = () =>{
  localStorage.removeItem('loggedIn')
  alert('Logout Sucessfully')
  router.push({name:'login'})
}

const isLoggedIn =computed(()=>{
  return localStorage.getItem('loggedIn') === '1';
})

</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Wonderful Blog
  </header>
  <section class="flex">
    <aside class="w-[450px] bg-black ">
      <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li v-if="isLoggedIn">
            <a href="#" @click="logout()">Logout</a>
          </li>
          <li v-if="!isLoggedIn">
            <router-link :to="{ name:'login'}">Login</router-link>
          </li>
          <li >
            <router-link :to="{ name:'dashboard'}">Dashboard</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'blog' }">Blog</router-link>
          </li>

          <li>
            <RouterLink :to="{name:'Post', params:{id:1}}">Post 1</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'Post', params:{id:2}}">Post 2</RouterLink>
          </li>
          <li>
            <RouterLink to="/post/3">Post 3</RouterLink>
          </li>
         
        </ul>
      </section>
    </aside>
    <main class="w-full min-h-screen p-5 prose">
      <RouterView />
      
    </main>
  </section>
  <footer class="bg-black text-white p-5 text-center">Gurpreet Singh</footer>
</template>

<style scoped></style>
