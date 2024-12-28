<template>
  <NuxtLink :to="`/tags/${tag.slug}`" class="flex mb-2 mr-2 overflow-hidden rounded-sm group whitespace-nowrap focus:border-none focus:outline-none focus:ring focus:ring-purple-200">
  <div class="px-2 py-1 text-purple-400 transition-colors duration-100 bg-purple-500 group-hover:bg-pink-500 group-hover:text-pink-300 " data-aos="zoom-in">
      <span>#</span> <span class="text-white">{{tag.slug}}</span>
  </div> 
  <span class="px-2 py-1 text-purple-400 transition-colors duration-100 bg-purple-600 group-hover:bg-pink-600 group-hover:text-pink-300" data-aos="zoom-in">{{tag.count}}</span>
  </NuxtLink>
</template>

<script>
import AOS from 'aos';
export default {
  props: [
    'tag',
  ],
  mounted: function(){
    AOS.init();
  }
}
</script>