const apiKey="e1cab330b10c2e70fbbdd03424898359";
const apiCountryURL="https://countryflagsapi.com/png/";


const cityInput=document.querySelector("#city-input");
const searchBtn=document.querySelector("#search");

const tempElement=document.querySelector("#temperature span")

const descElement=document.querySelector("#description")

const weatherIconElement=document.querySelector("#weather-icon")

const countryElement=document.querySelector("#country")

const unidityElement=document.querySelector("#unidity span")

const windElement=document.querySelector("#wind span")

const cityElement=document.querySelector("#city")

const getWeatherData= async (city)=>{


    const apiWeatheURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const resp=await fetch(apiWeatheURL);
    const data= await resp.json();

cityElement.innerText=data.name;
tempElement.innerText=parseInt(data.main.temp)
descElement.innerText=data.weather[0].description;
weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
unidityElement.innerText=`${data.main.humidity}%`;
windElement.innerText=`${data.wind.speed}/km/h`;
    console.log(data);
}


const showWeatherData= async (city)=>{

    const data= await getWeatherData(city);

    city

}


searchBtn.addEventListener("click",  (e)=>{

    e.preventDefault();

    const city=cityInput.value;

    showWeatherData(city);


});





