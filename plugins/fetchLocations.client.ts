import { ref } from 'vue';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

interface Location {
    origin: string;
    latitude: number;
    longitude: number;
}

export const locations = ref<Location[]>([]);

export const center = ref<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
});

/**
 * Calculate the geographic center (centroid) of a set of latitude and longitude points.
 * @param latitudes Array of latitude values.
 * @param longitudes Array of longitude values.
 * @returns An object with `latitude` and `longitude` of the center point.
 */
function calculateCentroid(latitudes: number[], longitudes: number[]): { latitude: number; longitude: number } {
    let x = 0,
        y = 0,
        z = 0;

    latitudes.forEach((lat, index) => {
        const lng = longitudes[index];
        const latRad = (lat * Math.PI) / 180; // Convert latitude to radians
        const lngRad = (lng * Math.PI) / 180; // Convert longitude to radians

        x += Math.cos(latRad) * Math.cos(lngRad);
        y += Math.cos(latRad) * Math.sin(lngRad);
        z += Math.sin(latRad);
    });

    const totalPoints = latitudes.length;
    x /= totalPoints;
    y /= totalPoints;
    z /= totalPoints;

    // Convert average x, y, z back to latitude and longitude
    const centralLng = Math.atan2(y, x);
    const hyp = Math.sqrt(x * x + y * y);
    const centralLat = Math.atan2(z, hyp);

    // Convert radians back to degrees
    return {
        latitude: (centralLat * 180) / Math.PI,
        longitude: (centralLng * 180) / Math.PI,
    };
}

/**
 * Process a list of locations and calculate the center.
 * @param {Array} locationList - List of location objects with latitude and longitude.
 */
export const processLocations = (locationList: any[]) => {
    locations.value = locationList.map((item) => ({
        origin: item.origin,
        latitude: item.latitude,
        longitude: item.longitude,
    }));

    // Calculate the geographic center
    const latitudes = locations.value.map((loc) => loc.latitude);
    const longitudes = locations.value.map((loc) => loc.longitude);

    const { latitude, longitude } = calculateCentroid(latitudes, longitudes);

    // Update the center
    center.value.latitude = latitude;
    center.value.longitude = longitude;

    console.log(`Center: ${center.value.latitude}, ${center.value.longitude}`);

    return {
        locations: locations.value,
        center: center.value,
    };
};

/**
 * Fetch location data from Google Sheets and calculate the center.
 */
export const fetchData = async () => {
    const parser = new PublicGoogleSheetsParser('1NncveTRud-Pg7B6T_GoIQK9zg79URhgLA9nE6Hxq2NA');
    // console.log('Fetching data...');
    try {
        const data = await parser.parse();

        // Map data into an array of Location objects
        locations.value = data.map((item) => ({
            origin: item.Origin_Address,
            latitude: item.Origin_Latitude,
            longitude: item.Origin_Longitude,
        }));

        //remove the first and last element
        locations.value.shift();
        locations.value.pop();

        // Calculate the geographic center
        const latitudes = locations.value.map((loc) => loc.latitude);
        const longitudes = locations.value.map((loc) => loc.longitude);

        const { latitude, longitude } = calculateCentroid(latitudes, longitudes);

        // Update the center
        center.value.latitude = latitude;
        center.value.longitude = longitude;

        //console.log(`Center: ${center.value.latitude}, ${center.value.longitude}`);
        //console.log('Locations fetched:', locations.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default defineNuxtPlugin({
    parallel: true,
    async setup() {
        await fetchData();
    },
    env: {
        islands: false,
    },
    enforce: 'post',
});
