<template>
  <div class="maindiv dark:bg-gray-900">
    <div class="flex flex-col min-h-screen">
      <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500">        
        <SvgViewBox />
        <Header/>

        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-16">
          <div class="flex flex-col items-center justify-center mt-12">
            <div class="relative ">
              <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded-lg"></div> 
              <div class="relative z-10 w-full">
                <div class="px-4 py-2 text-4xl font-extrabold text-purple-200 uppercase bg-white rounded-lg shadow-lg md:px-8 md:py-4 md:text-7xl">
                  #<span class="text-purple-700">TAGS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container relative z-10 flex items-center justify-center max-w-6xl mx-auto mb-8">
        <input type="text" @input="updateList()" v-model="filterText" placeholder="Type to filter ..." class="px-4 py-2 text-lg font-bold text-center text-purple-900 placeholder-purple-300 border border-purple-500 rounded shadow-inner outline-none appearance-none min-w-72 bg-purple-50 focus:ring ring-purple-100 dark:text-white dark:ring-gray-600 dark:bg-purple-900 dark:placeholder-purple-700">
      </div>

      <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex-1 mb-8 text-sm font-bold uppercase md:mb-16">
        <div class="flex flex-wrap justify-center">
            <TagPreview v-for="tag in filteredTagData" :key="tag.slug" :tag="tag"></TagPreview> 
        </div>
      </div>
      <Footer/>

    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const { data: postsRaw } = await useAsyncData('posts-list', () => queryContent('/').only(['title', 'image', 'date', '_path', 'tags', 'draft']).find())
  const posts = postsRaw._rawValue || postsRaw._value;
  posts.forEach((post, index, object) => { if (post.draft) object.splice(index, 1); }); // Remove draft
  const tagArray = posts.flatMap(post => post.tags ?? []);
  const uppercasedTagArray = tagArray.map(tag => tag.toUpperCase());
  const uniqTags = uppercasedTagArray.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const filteredTagData = ref(Object.entries(uniqTags).map(([slug, count]) => ({ slug, count })));
  const alltags = ref(filteredTagData.value)
  const filterText = ref('');

  onMounted(async () => {
    //await nextTick();
    //filteredTagData.value.sort(() => Math.random() - 0.5); // shuffle posts
  });
  
  const updateList = () => {
    filteredTagData.value = [];
    console.log(alltags.value);
    for (let tag of alltags.value) {
      if (tag.slug.includes(filterText.value.toUpperCase())) {
        filteredTagData.value.push(tag);
      }
    }
  };
</script>