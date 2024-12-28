<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <div>
      <ul v-if="origins.length">
        <li v-for="(item, index) in origins" :key="index">{{ item }}</li>
      </ul>
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import PublicGoogleSheetsParser from 'public-google-sheets-parser'

// Define a ref to store the items data
const items = ref([])
const origins = ref([])
const destinations = ref([])

onMounted(() => {
  const parser = new PublicGoogleSheetsParser('1NncveTRud-Pg7B6T_GoIQK9zg79URhgLA9nE6Hxq2NA')
  parser.parse().then(data => {
    items.value = data
    //Create two arrays - Origin and Destination from the data
    for (let i = 0; i < items.value.length; i++) {
      origins.value.push(items.value[i].Origin)
      destinations.value.push(items.value[i].Destination)
    }console.log(origins.value)
  })
})
</script>