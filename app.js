const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Belagavi&format=json&u=c';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c47b12d0f1msh904d6b50da20285p163413jsn51306e5812fb',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

let btn = document.querySelector(".search button");
let degree = document.querySelector(".degree");
let msg = document.querySelector(".msg");
let date = document.querySelector(".date");
let City = document.querySelector(".city");
let img = document.querySelector(".img");
let humidity = document.querySelector(".humidity span");
let wind = document.querySelector(".wind span");
let sunrise = document.querySelector(".sunrise .details ");
let sunset = document.querySelector(".sunset .details ");
let clouds = document.querySelector(".clouds span");
let index = document.querySelector(".visibility .number");
let pressure = document.querySelector(".pressure span");


btn.addEventListener("click", ()=>{
    let input = document.querySelector(".search input") ;
    let city = input.value;
    const baseurl = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
    const api = async ()=>{
		const response = await fetch(baseurl, options);
		const result = await response.json();
        console.log(result)
        weather(result);
        heighlights(result);

	}
    api();
})

function weather(result){
    msg.innerText = `Feels like ${result.current_observation.condition.temperature}°C` ;
    degree.innerText = result.current_observation.condition.temperature ;  
    date.innerText = `Monday, August 19 at 8:32  PM `;
    City.innerText = `${result.location['city']}, ${result.location['country']}`;
    let weatherCondition = result.current_observation['condition']['text'];
    if(weatherCondition == 'Mostly Cloudy' || weatherCondition == 'Cloudy')
        img.setAttribute('src','images/clouds.png')    
    else if(weatherCondition == 'Partly Cloudy')
        img.setAttribute('src','images/mist.png')
    else if(weatherCondition == 'Thunderstroms')
        img.setAttribute('src','images/drizzle.png')
    else if(weatherCondition == 'Showers')
        img.setAttribute('src','images/snow.png')
    else if(weatherCondition == 'Rain')
        img.setAttribute('src','images/rain.png')
    else if(weatherCondition == 'Mostly Sunny' || weatherCondition == 'Sunny' || weatherCondition == 'Fair')
        img.setAttribute('src','images/clear.png')
    
}

function heighlights(result){
    humidity.innerText = result.current_observation['atmosphere']['humidity']
    wind.innerText = result.current_observation['wind']['speed']
    clouds.innerText = result.current_observation['condition']['temperature']
    index.innerText = result.current_observation['atmosphere']['visibility']
    pressure.innerText = result.current_observation['atmosphere']['pressure']
    sunrise.firstElementChild.innerText = result.current_observation['astronomy']['sunrise']
    sunset.firstElementChild.innerText = result.current_observation['astronomy']['sunset']
}