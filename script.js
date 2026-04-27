const apiKey="6c1eb72e243061e9f6a372cceb23a722"

const cityInput=document.getElementById("city")
const searchBtn=document.getElementById("searchBtn")

const temp=document.getElementById("temp")
const cityName=document.getElementById("cityName")
const desc=document.getElementById("desc")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const feels=document.getElementById("feels")

searchBtn.addEventListener("click",getWeather)

async function getWeather(){

let city=cityInput.value.trim()

if(city===""){
alert("Enter a city name")
return
}

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

try{

let res=await fetch(url)
let data=await res.json()

if(data.cod!==200){
alert(data.message)
return
}

cityName.innerText=data.name
desc.innerText=data.weather[0].main
humidity.innerText=data.main.humidity+"%"
wind.innerText=Math.round(data.wind.speed*3.6)+" km/h"
feels.innerText=Math.round(data.main.feels_like)+"°C"

animateTemp(data.main.temp)

}catch(error){

alert("Failed to fetch weather data")

}

}

function animateTemp(value){

let start=0
let end=value
let duration=800
let startTime=null

function animate(time){

if(!startTime)startTime=time

let progress=time-startTime
let percent=Math.min(progress/duration,1)

let current=start+(end-start)*(Math.sin(percent*Math.PI/2))

temp.innerText=Math.round(current)+"°C"

if(percent<1)requestAnimationFrame(animate)

}

requestAnimationFrame(animate)

}