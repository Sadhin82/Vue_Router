<script setup>
import router from '@/router';
import { ref } from 'vue';

const username = ref('')
const password = ref('')

const login = () =>{
    if(username.value === 'admin' && password.value === 'admin'){
       localStorage.setItem('loggedIn', 1)
       router.push({name:'dashboard'})
    }else{
        alert('Login failed')
    }
}

</script>





<template>
<h1>This is the Login View</h1>
<form class="flex flex-col space-y-5" @submit.prevent="login">
    <input type="text" placeholder="Username" class="border-2 border-gray-300 rounded-md p-2" v-model="username" />
    <input type="password" placeholder="Password" class="border-2 border-gray-300 rounded-md p-2" v-model="password" />
    <button type="submit" class="bg-blue-500 text-white rounded-md p-2">Login</button>
</form>
</template>









<style scoped>


</style>