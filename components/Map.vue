<template>
  <div class="map-container">
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
</template>

<script setup>
import { ref } from 'vue'
import { locations, center } from '~/plugins/fetchLocations.client'

const zoom = ref(5)
const iconWidth = ref(4);
const iconHeight = ref(42);
const mapCenter = ref(center.value);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const polylineLatLngs = computed(() => {
  return locations.value.map(location => [location.latitude, location.longitude])
})
polylineLatLngs.value.push(polylineLatLngs.value[0])

//Function that will get the list of all the LMarkers and hide them one by one after 1 second between each
const traversePath = () => {
  const markers = document.querySelectorAll('.leaflet-marker-icon');
  const hidePromises = Array.from(markers).map((marker, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        marker.style.display = 'none';
        // change the center of the map to the current marker
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
    }, 400); // Adjust the delay as needed
  });
}

const clickHandler = () => {
  traversePath();
  //call helloWorld function from the plugin
  helloWorld();
}

onMounted(() => {
  // setTimeout(() => {
  //   traversePath();
  // }, 2000);
})

</script>

<style scoped>
.map-container {
  /*height: 100vh;  Full viewport height */
  width: 100vw;
  /* Full viewport width */
  position: relative;
  z-index: 1;
  /* Ensure it is above other elements */
}

.visualize-button-container {
  z-index: 1000; /* Ensure the button is above the map */
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
</style>