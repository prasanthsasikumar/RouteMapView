<template>
  <div>
    <div class="maindiv dark:bg-gray-800">
      <PostHero :post="post" />

      <!-- Body Part -->
      <div
        class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex flex-col-reverse justify-between mt-8 lg:space-x-24 lg:flex-row lg:mt-16">

        <!--Left side navigation. Disappars on mobile -->
        <div class="relative">
          <div
            class="p-4 py-8 -mx-4 rounded md:p-8 lg:p-4 md:-mx-8 lg:py-4 lg:mx-0 bg-gray-50 dark:bg-gray-900 sticky lg:mt-0 top-20 lg:max-w-80 lg:w-80"
            data-aos="zoom-in">
            <div v-if="post.github">
              <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Github</h3>
              <a :href="post.github" target="_blank"
                class="flex items-stretch overflow-hidden text-sm text-white text-gray-500 bg-gray-900 rounded dark:bg-gray-100 mb-4 md:mb-8">
                <div
                  class="flex items-center justify-center p-4 text-gray-300 bg-gray-800 dark:bg-white dark:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                    </path>
                  </svg>
                </div>
                <div class="p-4 text-gray-300 dark:text-gray-500"> The source code or files in this post are <span
                    class="text-white dark:text-gray-700">available on GitHub.</span></div>
              </a>
            </div>

            <div v-if="post.series">
              <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Series</h3>
              <div class="text-gray-600 rounded dark:text-gray-400 md:mb-4">
                <div class="flex items-stretch">
                  <div class="flex flex-col items-center min-h-full mr-3">
                    <div class="flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div class="w-3 h-3 rounded-full bg-gray-50 dark:bg-gray-800"></div>
                    </div>
                    <div class="flex-1 w-1 bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  <div class="pb-5 -mt-1 text-sm md:text-base"> This post is part of the <NuxtLink
                      :to="`/series/${post.series}`" class="font-bold text-pink-500 hover:underline">{{ post.series }}
                    </NuxtLink> series. Check out the other posts here:</div>
                </div>
                <ul class="ml-1 text-sm ">
                  <li v-for="(relatedPost, index) in postsInSeries" :key="relatedPost._path">
                    <NuxtLink :to="`/post${relatedPost._path}`"
                      class="relative flex items-stretch text-gray-400 group hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                      <div class="flex flex-col items-center min-h-full mr-4">
                        <div
                          class="relative z-10 w-3 h-3 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-700 dot group-hover:bg-gray-400">
                        </div>
                        <div v-if="index != postsInSeries.length - 1" class="flex-1 w-1 bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                      <div class="pb-5 -mt-1 transition-colors duration-300 seriestitle"> {{ relatedPost.title }} </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Tags</h3>
            <div class="flex flex-wrap text-xs font-bold uppercase mb-4 md:mb-8">
              <div v-for="tag in post.tags" :key="tag">
                <NuxtLink :to="`/tags/${tag}`"
                  class="block px-2 py-1 mb-2 mr-2 text-purple-400 transition-colors duration-100 bg-purple-500 rounded-sm whitespace-nowrap hover:bg-pink-500 hover:text-pink-300">
                  <span class="-mr-px">#</span> <span class="text-white">{{ tag }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <article class="min-w-0 prose prose-lg prose-pink max-w-none dark:prose-dark dark:text-white">
          <h3 class="dark:text-gray-200">{{ post.abstract }}</h3>

          <ContentRenderer :document="post" data-aos="fade-up">
            <ContentRendererMarkdown :value="post" />
          </ContentRenderer>
          <div v-if="nextpostinSeries._path" class="pt-8">
            <div
              class="h-full py-6 mt-8 text-sm text-center text-gray-500 border-t border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              Read the next post in this series here:
              <br class="md:hidden">
              <NuxtLink :to="`/post${nextpostinSeries._path}`" class="nextpostinSeries"> {{ nextpostinSeries.series }}:
                {{ nextpostinSeries.title }} </NuxtLink>
            </div>
          </div>
        </article>

      </div>

      <div
        class="py-8 border-t border-gray-200 bg-gray-50 dark:bg-gray-900 lg:mt-16 lg:border-t-0 dark:border-gray-700">
        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0">
          <div class="justify-between md:flex md:space-x-8 text-xs font-bold tracking-wide uppercase">
            <NuxtLink :to="`/post${prevPost._path}`" v-if="prevPost._path"
              class="flex flex-row-reverse items-center justify-between text-pink-500 md:flex-row group">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="text-pink-600 md:mr-2 md:block">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M19.25 12H5"></path>
              </svg>
              <div class="truncate">
                <div class="text-xs font-normal text-gray-400">Previous post:</div>
                <span class=" group-hover:underline">{{ prevPost.title }}</span>
              </div>
            </NuxtLink>
            <NuxtLink :to="`/post${nextPost._path}`" v-if="nextPost._path"
              class="flex items-center justify-between mt-4 text-pink-500 md:text-right group md:mt-0">
              <div class="truncate">
                <div class="text-xs font-normal text-gray-400">Next post:</div>
                <span class=" group-hover:underline">{{ nextPost.title }}</span>
              </div>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" class="ml-2 text-pink-600 md:block">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M19 12H4.75"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- <div
        class="text-gray-600 bg-gray-100 dark:bg-gray-900 dark:border-t dark:border-b dark:border-gray-700 dark:text-gray-300">
        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 pt-8 pb-8 lg:pt-4 lg:pb-16">
          <div class="text-sm text-center text-gray-300 opacity-0 h-0 overflow-hidden absolute">Loading comments …</div>
          <div class="">
            <div id="disqus_thread"></div>
          </div>
        </div>
      </div> -->


      <div class="py-8 bg-gray-700 dark:bg-gray-900 lg:py-16">
        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0">
          <h3 class="block mb-8 text-sm font-extrabold text-center text-white lg:mb-16 lg:text-xl">You might also like
            the following posts …</h3>
          <div class="grid grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:gap-12">
            <NuxtLink :to="`/post${suggestion._path}`" v-for="suggestion in suggestions" :key="suggestion.title">
              <div
                class="relative w-full overflow-hidden rounded shadow-lg aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-900 to-gray-700">
                <NuxtImg :src="suggestion.image" style="width: 400px; height: 170px; object-fit: cover;"  />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800">
                  <div class="absolute inset-x-0 bottom-0 p-3 pt-24 md:p-4">
                    <h2 class="text-base font-extrabold text-white truncate md:text-lg">{{ suggestion.title }}</h2>
                  </div>
                </div>
              </div>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import AOS from 'aos';
import { ref } from 'vue';
const route = useRoute()
const postPath = "/" + route.params.slug
const post = await queryContent('/').where({ _path: postPath }).findOne()

//ToDO - move the following to lazy load
const { data: postsRaw } = await useAsyncData('posts-list', () => queryContent('/')
  .only(['title', 'image', 'tags', 'abstract', 'date', 'length', '_path', 'series', 'draft', 'file']).find())
const posts = postsRaw._rawValue || postsRaw._value;
posts.forEach((post, index, object) => { if (post.draft) object.splice(index, 1); }); // Remove draft
posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // arrange posts according to date
var prevPost = {}, nextPost = {};
posts.forEach((post, i) => {
  if (post._path === postPath) {
    if (i > 0) {
      nextPost = { title: posts[i - 1].title, _path: posts[i - 1]._path };
      console.log(nextPost);
    }
    if (i < posts.length - 1) {
      prevPost = { title: posts[i + 1].title, _path: posts[i + 1]._path };
    }
  }
}); // Get the next and previous 


var suggestions = ref({});
var postlist = ref(posts);

//For Series sidebar
var postsInSeries = new Array();
for (let i = 0; i < posts.length; i++) {
  if (post.series && post.series == posts[i].series) {
    postsInSeries.push(posts[i]);
  }
}
postsInSeries = postsInSeries.reverse();

//Get the next post in the series.
var nextpostinSeries = {}
for (let i = 0; i < postsInSeries.length; i++) {
  if (post._path == postsInSeries[i]._path) {
    if (i < (postsInSeries.length - 1)) {
      nextpostinSeries = postsInSeries[i + 1];
    }
    break;
  }
}

function addImageCaptions() {
  const images = document.querySelectorAll('.prose img');
  images.forEach(img => {
    const title = img.getAttribute('title');
    if (title) {
      const container = document.createElement('div');
      container.classList.add('prose-image-container');
      
      // Wrap the image with the container div
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);

      // Create and append the caption
      const caption = document.createElement('p');
      caption.classList.add('prose-image-caption');
      caption.textContent = title;
      container.appendChild(caption);
    }
  });
}
onMounted(() => {
  AOS.init({ once: true });
  addImageCaptions();
  const getRandomPosts = (posts, count) => {
      const shuffledPosts = posts.sort(() => 0.5 - Math.random());
      return shuffledPosts.slice(0, count);
    };
  suggestions.value = getRandomPosts(postlist.value, 8);
});
</script>
