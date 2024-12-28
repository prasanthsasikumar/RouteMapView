<template>
    <div class="aos-init aos-animate">
      <div
        class="project-item p-4 relative bg-gradient-to-tl from-black to-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between">
        <NuxtLink class="overlay-link absolute inset-0 z-10" :to="project.link"></NuxtLink>
        <div class="project-img flex-1">
          <img :src="project.image" alt="Project" class="w-full h-72 object-cover rounded-3xl">
        </div>
        <div class="flex items-center justify-between pt-8">
          <div class="project-info">
            <p class="text-base text-gray-400">{{ project.category }}</p>
            <h1 class="text-white text-opacity-90 text-xl font-medium">{{ project.title }}</h1>
          </div>
          <NuxtLink :to="project.link" class="project-btn">
            <img src="/about/icon.svg" alt="Button">
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>

<script setup>
const { props } = defineProps(['project']);

const fromColor = 'black';
const toColor = 'gray-700';
</script>

<style scoped>
/* Any additional styles for ProjectItem.vue */
</style>