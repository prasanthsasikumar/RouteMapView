<template>
  <NuxtLink :to="`/post${post._path}`" data-aos="zoom-in">
    <div class="relative">
      <NuxtImg :src="post.image" style="width: 400px; height: 300px; object-fit: cover;" class="rounded shadow-lg md:shadow-lg bg-gradient-to-br from-gray-800 to-gray-700"/>
    </div> 
    <div class="mt-6 md:mt-8">
      <h3 v-if="post.series" class="text-lg font-extrabold text-gray-500 dark:text-gray-400 md:text-xl">{{post.series}}</h3>
      <h2 class="text-2xl font-extrabold md:text-3xl text-gray-100 text-gray-800 dark:text-gray-100">{{post.title}}</h2> 
      <div class="flex items-center -ml-px text-xs tracking-wide uppercase my-4 text-gray-400">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 -ml-1 transform -translate-y-px opacity-75"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4.75V8.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75V8.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 10.75H16.25"></path></svg> 
        <span>{{ formatDate(post.date)}}</span> 
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 ml-2 opacity-75"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path> <circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle></svg> 
        <span>{{post.length}} mins read</span>
      </div> 
      <p class="mt-4 text-sm tracking-wide text-gray-500 sm:tracking-normal md:text-base dark:text-gray-300">{{post.abstract}}</p>
      <div class="inline-flex items-center text-xs font-bold tracking-wide uppercase mt-4 text-gray-500 hover:text-gray-800" post="[object Object]">            
      <span>Read more</span> 
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-5 ml-1 text-pink-600"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path></svg></div>
    </div>
  </NuxtLink>
</template>

<script>
import AOS from 'aos';
export default {
  props: [
    'post',
  ],
  methods: {
    formatDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric'  }
      return new Date(date).toLocaleDateString('en-GB', options)
    }
  },
  mounted: function(){    
    AOS.init();
  }
}
</script>