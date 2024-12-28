<template>
    <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500">
        <div class="absolute inset-0 overflow-hidden">
            <NuxtImg :src="post.image" width="1200" height="700" class="absolute inset-0 object-cover w-full h-full opacity-50 mix-blend-overlay filter blur grayscale"/>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-x-0 bottom-0 w-full h-12 text-white md:h-32 lg:h-48" :style="{ color: 'var(--bg)' }">
            <polygon points="0,100 0,0 100,100" class="fill-current"></polygon>
        </svg>
        <Header/>
        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-16">
            <nuxt-link :to="`/post${post._path}`" class="flex flex-col gap-4 lg:gap-12 lg:grid lg:grid-cols-3" data-aos="zoom-in">
                <div class="flex flex-col items-center text-center lg:text-left lg:items-start lg:hidden">
                    <!---->
                    <h2 class="w-3/4 text-4xl font-extrabold text-white lg:text-5xl lg:w-full" >{{ post.title }}</h2>
                    <div class="flex items-center -ml-px text-xs tracking-wide uppercase my-4 text-purple-200 lg:text-pink-300" >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 -ml-1 transform -translate-y-px opacity-75" >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4.75V8.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75V8.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 10.75H16.25" />
                    </svg>
                    <span>{{formatDate(post.date)}}</span>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 ml-2 opacity-75">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" />
                        <circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    </svg>
                    <span>{{post.length}} mins read</span>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <div class="relative">
                    <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded" ></div>
                    <div class="relative z-10 w-full">
                        <NuxtImg :src="post.image" width="1200" height="700" class="w-full rounded shadow-xl bg-gradient-to-br from-gray-800 to-gray-700" />
                    </div>
                    </div>
                </div>
                <div class="flex flex-col items-center pb-8 text-center lg:text-left lg:items-start">
                    <!---->
                    <h2 class="hidden w-2/3 text-3xl font-extrabold text-left text-white lg:block md:text-4xl lg:text-5xl lg:w-full" >{{ post.title }}</h2>
                    <div class="flex items-center -ml-px text-xs tracking-wide uppercase hidden w-full mt-4 text-purple-200 lg:flex lg:text-pink-300" >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 -ml-1 transform -translate-y-px opacity-75" >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4.75V8.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.75V8.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 10.75H16.25" />
                    </svg>
                    <span>{{formatDate(post.date)}}</span>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-4 ml-2 opacity-75">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" />
                        <circle cx="12" cy="12" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    </svg>
                    <span>{{post.length}} mins read</span>
                    </div>
                    <div class="whitespace-pre-line text-left lg:text-lg lg:mt-4 text-pink-50"> {{post.abstract}} </div>
                    <div class="flex justify-end w-full lg:justify-start">
                    <div class="inline-flex items-center text-xs font-bold tracking-wide uppercase mt-4 text-pink-200 hover:text-white" >
                        <span>Read more</span>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-5 ml-1 text-pink-400" >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75" />
                        </svg>
                    </div>
                    </div>
                </div>
            </nuxt-link>    
        </div>        
    </div>
</template>

<script>
import AOS from 'aos';
import Header from './Header.vue'
export default {
    props: [
    'post'
    ],
    components: {
        Header,
    },
    methods: {
        formatDate(date) {
            const options = { day: 'numeric', month: 'long', year: 'numeric'  }
            return new Date(date).toLocaleDateString('en-GB', options)
        },
    },
    mounted: function(){    
        AOS.init();
    }
}
</script>