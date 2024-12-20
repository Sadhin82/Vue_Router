<script setup>
import { onBeforeMount, ref} from 'vue';

import { RouterLink, RouterView } from 'vue-router';
const posts = ref([]);

onBeforeMount( async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value =  await response.json()
})

</script>





<template>
<h1>Blog Page</h1>
<p>Welcome To The Blog Page</p>
<h1> the Blog Post</h1>
<article v-for="post in posts" :key="post.id">
   
     <h2>
     {{ post.id }}.
        <RouterLink :to="{name:'Post', params:{id: post.id}}">{{ post.title }}</RouterLink>
       </h2>
</article>
</template>









<style scoped>


</style>