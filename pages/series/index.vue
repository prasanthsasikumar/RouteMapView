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
                  #<span class="text-purple-700">SERIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex-1 ">
        <SeriesPreview v-for="(seriesElement, i) in seriesData.series" :key="i" :seriesElement="seriesElement"></SeriesPreview> 
      </div>

    </div>    
    <Footer/>
  </div>
</template>

<script setup>
  const { data: postsRaw } = await useAsyncData('posts-list', () => queryContent('/').only(['title', 'image', 'date', '_path', 'series', 'draft']).find())
  const posts = postsRaw._rawValue || postsRaw._value;
  posts.forEach((post, index, object) => { if (post.draft) object.splice(index, 1); }); // Remove draft
  posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // arrange posts according to date

  const seriesNameSet = new Set();
  const seriesPosts = [];
  posts.forEach(post => {
    if (post.series) {
      seriesNameSet.add(post.series);
      seriesPosts.push(post);
    }
  });

  const uniqueSeriesNames = [...seriesNameSet];
  const seriesData = { series: [] };
  uniqueSeriesNames.forEach(seriesName => {
    const seriesPostsList = seriesPosts.filter(post => post.series === seriesName);
    seriesData.series.push({
      seriesName,
      posts: seriesPostsList.reverse() // Reverse order of posts
    });
  });
</script>
