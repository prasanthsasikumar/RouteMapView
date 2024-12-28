<template>
    <div class="mb-16" data-aos="zoom-in">
        <NuxtLink :to="`/series/${seriesElement.seriesName}`" class="mb-2 text-2xl font-extrabold text-gray-800 md:text-4xl dark:text-gray-100">{{seriesElement.seriesName}}</NuxtLink>
        <div>
            <div class="mb-4 text-sm text-gray-500 md:text-base">There are  <strong class="text-gray-600 dark:text-gray-200">{{seriesElement.posts.length}}</strong> posts in the <NuxtLink :to="`/series/${seriesElement.seriesName}`" class="font-bold text-pink-500">{{seriesElement.seriesName}}</NuxtLink> series.</div> 
            <div class="container grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-5">
                <NuxtLink v-for="(post, i) in seriesElement.posts" :key="i" :to="`/post${post._path}`" class="">
                    <div class="relative overflow-hidden rounded shadow-lg aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-900 to-gray-700">
                        <NuxtImg :src="post.image" :width="600" :height="400" style="width: 800px; height: 200px; object-fit: cover;" class="rounded shadow-lg md:shadow-lg bg-gradient-to-br from-gray-800 to-gray-700"/>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent  to-gray-800">
                            <div class="absolute inset-x-0 bottom-0 p-3 pt-24 md:p-4">
                                <h2 class="text-xs font-extrabold truncate md:text-sm text-gray-300"></h2> 
                                <h2 class="text-base font-extrabold text-white truncate md:text-lg"> {{post.title}}</h2>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                <!-- <a href="/series/Activity%20Board" class="transition-colors duration-200 rounded shadow-lg bg-gradient-to-br from-gray-900 via-purple-900 to-purple-500 hover:from-pink-700 hover:via-pink-500 hover:to-pink-400 aspect-w-4 aspect-h-3"><div class="absolute inset-0 flex flex-col items-center justify-center"><div class="text-3xl font-extrabold text-white md:text-4xl">+8</div> <p class="text-xs text-white">more posts</p></div></a> -->
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
export default {
  props: [
    'seriesElement',
  ],
  mounted: function(){
    AOS.init();
    //console.log(this.seriesElement)
  }
}
</script>