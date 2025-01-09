<!-- filepath: /C:/Users/vrmss/OneDrive/Documents/GitHub/RouteMapView/pages/index.vue -->
<template>
  <div class="maindiv dark:bg-gray-900">
    <div class="flex flex-col min-h-screen">
      <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 from-10% via-purple-900 via-60% to-pink-500">
        <SvgViewBox />
        <Header />
        <!-- add 20% of vertical height available as gap -->
        <div class="h-20"></div>
        <div class="flex-grow font-extrabold text-center lg:w-full text-3xl lg:text-8xl text-white">
          THE GREAT INDIA RIDE
        </div>
        <div class="flex-grow text-center lg:w-full text-sm lg:text-base text-white/[.3]">
          <a href="https://prasanthsasikumar.com" target="_blank" rel="noopener noreferrer" class="hover:underline">
            Why do we love to ride?
          </a>
        </div>

        <div class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 mt-8 mb-0 md:mb-8 lg:mt-32">
          <section class="about-area">
            <div class="container mx-auto">
              <!-- First Row -->
              <div class="flex flex-col sm:flex-row md:grid md:grid-cols-12 gap-4">
                <div class="md:col-start-1 md:col-span-4 md:max-w-[380px] align-middle px-4 md:px-0" data-aos="zoom-in">
                  <div class="about-image-box shadow-box">
                    <div class="image-inner">
                      <img src="/psk2.png" alt="Prasanth Sasikumar" class="rounded-lg">
                    </div>
                  </div>
                </div>
                <div class="md:col-start-5 md:col-end-13">
                  <h1 class="section-heading py-8" data-aos="fade-up">
                    <span>Ride&nbsp;</span>
                    <span id="typed-words" class="cd-words-wrapper"></span>
                  </h1>
                  <div class="about-details" data-aos="zoom-in">
                    <div class="about-details-inner shadow-box">
                      <NuxtLink class="overlay-link" to="/credentials"></NuxtLink>
                      <img class="star-img" src="/icon2.png" alt="Star">
                      <h1 class="leading-tight">Prasanth Sasikumar</h1>
                      <p class="pt-4">
                        On a journey to experience the vibrant diversity of India, exploring its cultures, landscapes,
                        and stories. The map below shows my route—click here to know more.
                      </p>
                      <div class="w-full flex justify-end mt-4">
                        <div
                          class="inline-flex items-center text-xs font-bold tracking-wide uppercase text-grey-400 hover:text-red">
                          <!-- Add your button or link here -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Add the Map component here -->
              <div class="map-container mt-8">
                <LMap style="height: 550px" ref="map" :zoom="zoom" :center="[mapCenter.latitude, mapCenter.longitude]"
                  :use-global-leaflet="false">
                  <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" />

                  <LMarker v-for="location in locations" :key="location.origin" :icon-size="iconSize"
                    :lat-lng="[location.latitude, location.longitude]">
                    <LPopup>{{ location.origin }}</LPopup>
                  </LMarker>
                  <LPolyline :lat-lngs="polylineLatLngs" color="green" />
                  <LControl position="topright">
                    <div class="visualize-button-container">
                      <button class="visualize-button" @click="clickHandler">Visualize</button>
                    </div>
                  </LControl>
                </LMap>
              </div>
              <div id="try-yourself-text" class="flex-grow text-center lg:w-full text-sm lg:text-base text-white/[.3]">
                <a href="#" @click.prevent="showDiv">Click here to if you'd like to try out the map yourself.</a>
              </div>
              <div class="hidden" id="map-form">
                <div class="flex justify-center mt-8">
                  <input type="text" id="input-box" class="border p-2 flex-grow min-w-0"
                    placeholder="Enter comma separated locations here">
                </div>
                <div class="flex justify-center mt-8">
                  <button @click="calculateRoute" class="border p-2 bg-blue-500 text-white">Calculate</button>
                </div>
                <div id="results" class="hidden bg-black text-white mt-8">
                  <div class="flex justify-center mt-8">
                    <table id="results-table" class="border-collapse w-full"></table>
                  </div>
                  <div class="flex justify-center mt-8">
                    <pre id="total-distance" class="border p-2 w-full"></pre>
                  </div>
                  <div class="flex justify-center mt-8">
                    <pre id="total-time" class="border p-2 w-full"></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Typed from 'typed.js'
import { ref, computed, onMounted } from 'vue'
import { locations, center, processLocations } from '~/plugins/fetchLocations.client'

const zoom = ref(5)
const iconWidth = ref(4);
const iconHeight = ref(42);
const mapCenter = ref(center.value);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const polylineLatLngs = computed(() => {
  return locations.value.map(location => [location.latitude, location.longitude])
})
polylineLatLngs.value.push(polylineLatLngs.value[0])

const traversePath = () => {
  const markers = document.querySelectorAll('.leaflet-marker-icon');
  const hidePromises = Array.from(markers).map((marker, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        marker.style.display = 'none';
        const lat = locations.value[index].latitude;
        const lng = locations.value[index].longitude;
        mapCenter.value = { latitude: lat, longitude: lng };
        resolve();
      }, index * 400);
    });
  });

  Promise.all(hidePromises).then(() => {
    setTimeout(() => {
      markers.forEach((marker) => {
        marker.style.display = '';
      });
    }, 400);
  });
}

const clickHandler = () => {
  traversePath();
}

const showDiv = () => {
  document.getElementById('map-form').classList.remove('hidden');
  document.getElementById('try-yourself-text').classList.add('hidden');
}

onMounted(() => {
  const options = {
    strings: [' for Freedom', ' the Horizon', ' for Adventure', ' Beyond Limits', ' to Explore', ' with Passion', ' into Serenity', ' the Wind', ' to Discover', ' for Moments', ' to Breathe', ' to Connect', ' with Purpose', ' into Culture', ' through Time', ' to Inspire', ' the Journey', ' for Peace', ' with Wonder', ' to Dream', ' with Gratitude', ' for Stories', ' to Celebrate'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  }

  const inputBox = document.getElementById('input-box');
  inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  });

  new Typed('#typed-words', options)
})

async function calculateRoute() {
  const locations = document.getElementById('input-box').value.split(',');
  const response = await fetch('https://theconsciousriderbackend.prasanthsasikumar.com/api/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ locations: locations })
  });
  // print JSON.stringify({ locations: locations })
  console.log(JSON.stringify({ locations: locations }))
  const data = await response.json();
  console.log(data);
  displayResults(data);
}

function displayResults(data) {
  const resultsTable = document.getElementById('results-table');
  resultsTable.innerHTML = `
    <tr>
      <th>Origin</th>
      <th>Destination</th>
      <th>Distance</th>
      <th>Time</th>
    </tr>
  `;
  data.results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.origin_name}</td>
      <td>${result.destination_name}</td>
      <td>${result.distance}</td>
      <td>${result.duration}</td>
    `;
    resultsTable.appendChild(row);
  });
  document.getElementById('total-distance').innerText = `Total Distance: ${data.total_distance}`;
  document.getElementById('total-time').innerText = `Total Time: ${data.total_time}`;

  document.getElementById('results').
    classList.remove('hidden');

  updateMap(data.results);
}

async function updateMap(results) {
  const locations = results.map(result => {
    return {
      origin: result.origin_name,
      latitude: result.origin_lat,
      longitude: result.origin_lng
    }
  });
  await processLocations(locations);
}



definePageMeta({
  colorMode: 'dark',
})
</script>

<style scoped>
.visualize-button-container {
  z-index: 1000;
}

.visualize-button {
  background: white;
  color: black;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.visualize-button:hover {
  background: #f0f0f0;
}

#results-table {
  background-color: transparent;
  border: 1px solid black;
}

#results-table td,
#results-table th {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

#results-table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>