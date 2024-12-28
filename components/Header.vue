<template>
    <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex items-center justify-between h-12 text-base leading-none text-white relative z-20">
            <div class="flex-1 transform -translate-y-px">
                <NuxtLink to="/" class="psk font-extrabold md:text-lg lg:text-xl text-white">theconsciousrider<span class="font-light text-purple-200">.com</span></NuxtLink>
            </div>
            <nav class="items-center justify-center flex-1 hidden space-x-3 text-sm tracking-wide uppercase md:space-x-4 lg:space-x-8 md:flex">
                <NuxtLink to="/blog" class="text-purple-100 hover:text-white">Posts</NuxtLink>
                <NuxtLink to="/series" class="text-purple-100 hover:text-white">Series</NuxtLink>
                <NuxtLink to="/tags" class="text-purple-100 hover:text-white">Tags</NuxtLink>
                <NuxtLink to="/about" class="text-purple-100 hover:text-white">About</NuxtLink>
                <!-- <a href="https://portfolio.prasanthsasikumar.com" class="text-white">Old Site</a>
                <a href="https://confident-mclean-2adaf2.netlify.app/" class="text-white">CV</a> -->
            </nav>
            <div class="flex items-center justify-end flex-1">
                <button class="theme-toggle-button border-none outline-none focus:outline-none hidden md:block" @click="updateTheme()">
                    <div class="relative flex items-center p-1 border-2 border-white rounded-full">
                        <div class="themetoggler absolute w-5 h-5 transition-transform duration-200 bg-white rounded-full" style="left: 2px"> </div> 
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="relative w-4 h-4 mr-1 transition-colors duration-200 text-purple-900 dark:text-white"> <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2.75V4.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 6.75L16.0659 7.93416"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.25 12.0001L19.75 12.0001"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 17.2501L16.0659 16.066"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19.75V21.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.9341 16.0659L6.74996 17.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.25 12.0001L2.75 12.0001"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.93405 7.93423L6.74991 6.75003"></path> </svg>  
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="relative w-4 h-4 transition-colors duration-200 text-white dark:text-purple-900"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"></path> </svg>
                    </div>
                </button>
            </div>
            <button class="focus:outline-none md:hidden" @click="sidebarActive = !sidebarActive">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"></path> </svg>
            </button>
            <div class="fixed inset-0 z-50" :class="!sidebarActive?'pointer-events-none':''"><!----> <!---->  
                <Sidebar v-if="sidebarActive" :sidebarActive="sidebarActive" @update:sidebarActive="sidebarActive = $event"></Sidebar>                
            </div>
        </div>
</template>


<script>
export default {
    methods: {
        updateTheme: function () {   
            console.log(this.$colorMode.preference)      
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
    data() {
        return {
        sidebarActive: false,
        }
    }
}
</script>

<style scoped>
    .dark .themetoggler{
       transform: translateX(1.25em) 
    }
</style>