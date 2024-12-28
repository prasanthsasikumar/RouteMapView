<template>
  <div class="maindiv dark:bg-gray-900">
    <!-- Header Part -->
    <SiteHero :post="heroPost"/>
    <!-- add some space -->
    <div class="h-16"></div>

    <!--Body Part -->
    <div class="dark:bg-gray-900">
      <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 grid flex-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <PostPreview v-for="post in posts" :post="post"></PostPreview> 
      </div>
      <div class="flex items-center justify-center w-full mt-8 md:mt-16 bg-gray-50 dark:bg-gray-900">
        <div class="block px-4 py-1 my-4 text-sm text-center text-gray-400 md:my-8 view-in--gt-half view-in--full view-in">That's all folks!</div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script setup>
const { data: postsRaw } = await useAsyncData('posts-list', () => queryContent('/')
.only(['title', 'image', 'tags', 'abstract', 'date', 'length', '_path', 'series', 'draft', 'file'])
.find())
console.log(postsRaw)
const posts = postsRaw._rawValue || postsRaw._value;
console.log(posts)
posts.forEach((post, index, object) => { if (post.draft) object.splice(index, 1); }); // Remove draft
posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // arrange posts according to date
const heroPost = posts.shift() 
</script>
