<template>
  
  <div class="maindiv dark:bg-gray-900">

    <div class="flex flex-col min-h-screen">      
      <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500">
        <SvgViewBox />
          <Header/>

          <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-16">
            <div class="flex flex-col items-center justify-center mt-4 md:mt-0">
              <div class="mb-4 text-sm text-purple-200 whitespace-nowrap md:text-base">
                There are  <strong class="text-white">{{filteredPosts.length}}</strong> posts tagged with
              </div>
              <div class="relative ">
                <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded-lg"></div> 
                <div class="relative z-10 w-full">
                  <div class="px-4 py-2 text-4xl font-extrabold text-purple-200 uppercase bg-white rounded-lg shadow-lg md:px-8 md:py-4 md:text-7xl">
                    #<span class="text-purple-700">{{tagName}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>          
      </div>

      <!--Body Part -->
      <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 grid flex-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <PostPreview v-for="post in filteredPosts" :key="post.slug" :post="post"></PostPreview> 
      </div>
      <div class="flex items-center justify-center w-full mt-8 md:mt-16 bg-gray-50 dark:bg-gray-900">
        <div class="block px-4 py-1 my-4 text-sm text-center text-gray-400 md:my-8 view-in--gt-half view-in--full view-in">That's all folks!</div>
      </div>
    
    </div>      
    <Footer/>
  </div>
</template>

<script setup>
  const route = useRoute()
  const tagName = route.params.slug
  const { data: postsRaw } = await useAsyncData('posts-list', () => queryContent('/').only(['title', 'image', 'date', '_path', 'tags', 'draft']).find())
  const posts = postsRaw._rawValue || postsRaw._value;
  posts.forEach((post, index, object) => { if (post.draft) object.splice(index, 1); }); // Remove draft
  posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // arrange posts according to date
  const filteredPosts = [];
  for (let post of posts) {
      const tagsUpperCase = post.tags.map(tag => tag.toUpperCase());
      if (tagsUpperCase.includes(tagName.toUpperCase())) {
          filteredPosts.push(post);
      }
  } 

</script>

<style>
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 28px;
  }

  .nuxt-content h6 {
      margin-top: -4rem;
  }
  
  .nuxt-content img{
    display: block;
    margin-left: auto;
    margin-right: auto;    
    border-radius: 0.5rem;
  }

</style>