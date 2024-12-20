<script setup>
import { onBeforeMount, ref } from 'vue';


// const Posts = ref([
//      {
//           title:'My 1st Title',
//           content:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, porro 1111'
//      },
//      {
//           title:'My 2nd Title',
//           content:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, porro 222'
//      },
//      {
//           title:'My 3rd Title',
//           content:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, porro 333'
//      },

// ])

const posts = ref([]);
onBeforeMount(async ()=>{
     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
     posts.value = await response.json()
})
</script>





<template>
<h1>{{ $route.params.id }}</h1>
  <h1>{{ posts[$route.params.id-1].title }}</h1>
  <p>
     {{ posts[$route.params.id-1].body }}
  </p>
</template>









<style scoped>


</style>