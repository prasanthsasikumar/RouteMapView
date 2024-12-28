<template>
  <div class="absolute inset-0 z-50 flex flex-col justify-between h-full min-h-full p-8 text-gray-700 transition-all transform bg-white shadow-2xl dark:text-gray-200 dark:bg-black left-16" >
    <div>
      <div class="flex items-center justify-between mb-16" data-aos="flip-up">
        <NuxtLink to="/" aria-current="page" class="text-lg font-extrabold lg:text-xl" > PrasanthSasikumar <span class="font-light text-gray-400">.com</span> </NuxtLink>
        <button class="focus:outline-none" @click="updateValue()">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25" /> </svg>
        </button>
      </div>
      <nav class="flex flex-col space-y-4 text-2xl text-gray-800" data-aos="fade-right">
        <NuxtLink to="/blog" aria-current="page" class="flex items-center justify-between text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" > Posts <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg> </NuxtLink>
        <NuxtLink to="/series" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" > Series <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg> </NuxtLink>
        <NuxtLink to="/tags" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" > Tags <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg> </NuxtLink>
        <NuxtLink to="/about" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" > About <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg> </NuxtLink>
        <!-- <br><br><br><br><br><br>
        <a href="#" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">[These would be removed once in production]</a>
        <a href="https://portfolio.prasanthsasikumar.com" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Old Site
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg>
        </a>
        <a href="https://confident-mclean-2adaf2.netlify.app/" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">CV
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" /> </svg>
        </a> -->
      </nav>
    </div>
    <div class="flex items-center space-x-4">
      <a href="https://twitter.com/get2psk" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" > <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /> </svg> </a>
      <a href="https://www.instagram.com/psk._/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" > <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg> </a>
      <a href="https://www.youtube.com/channel/UCyyj53OnL5aDo55Fuee4nZw" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" > <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /> </svg> </a>
      <div class="flex items-center justify-end flex-1">
        <div class="p-px bg-gray-800 rounded-full">
          <button class="border-none outline-none focus:outline-none" @click="updateTheme()">
            <div class="relative flex items-center p-1 border-2 border-white rounded-full">
              <div class="themetoggler absolute w-5 h-5 transition-transform duration-200 bg-white rounded-full" style="left: 2px;"></div>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="relative w-4 h-4 mr-1 transition-colors duration-200 text-purple-900 dark:text-white" > <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2.75V4.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 6.75L16.0659 7.93416" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.25 12.0001L19.75 12.0001" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 17.2501L16.0659 16.066" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19.75V21.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.9341 16.0659L6.74996 17.25" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.25 12.0001L2.75 12.0001" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.93405 7.93423L6.74991 6.75003" /> </svg>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="relative w-4 h-4 transition-colors duration-200 text-white dark:text-black" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z" /> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z" /> </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
export default {
    props: [
        'sidebarActive'
    ], 
    methods: {
      updateValue: function () {
          this.$emit('update:sidebarActive', false)
      },
      updateTheme: function () {            
        if(this.$colorMode.preference == "system"){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {               
                this.$colorMode.preference = "light"
            }else{
            this.$colorMode.preference = "dark"
            }
        }
        else if(this.$colorMode.preference == "dark"){
            this.$colorMode.preference = "light"
        } else {
            this.$colorMode.preference = "dark"
        }
      }
    },
    mounted: function(){
        AOS.init();
    }     
}
</script>

<style scoped>
    .dark .themetoggler{
       transform: translateX(1.25em) 
    }
</style>