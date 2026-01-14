
async function fetchweatherData(){
    try {
        const weatherData = await Promise.any([
            fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Bangkok').then(res => res.json()),
            fetch('https://api.open-meteo.com/v1/forecast?latitude=13.7563&longitude=100.5018&current_weather=true').then(res => res.json()),
            fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=13.7563&lon=100.5').then(res => res.json() )
        ]);

        console.log('weather Data from fastest source:', weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


await fetchweatherData();