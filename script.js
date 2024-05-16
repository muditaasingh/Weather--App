const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fe275e42cmsh24557aeee7e4783p19470cjsn980b3a6115d0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=> response.json())
.then((response)=> {
    
    
    console.log(response)
    //cloud_pct.innerHTML= response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML= response.feels_like
    humdity.innerHTML= response.humdity
    min_temp.innerHTML= response.min_temp
    max_temp.innerHTML= response.max_temp
    Wind_speed.innerHTML= response.Wind_speed
    Wind_degrees.innerHTML= response.Wind_degrees
    sunrise.innerHTML= response.sunrise
    sunset.innerHTML= response.sunset  
})
.catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
