import React, { useEffect, useState } from 'react'
import './weather.css'
import {AsyncPaginate} from 'react-select-async-paginate'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CloudIcon from '@mui/icons-material/Cloud';
import SearchIcon from '@mui/icons-material/Search';
export default function Weather() {
  let [dat,ch_data]=useState({})
  let [loc,ch_loc]=useState("")
//////////////naming process///////
let [name,ch_name]=useState("Adama")
let [country,ch_country]=useState("Ethiopia")
let [lat,ch_lat]=useState(11.34)
let [lon,ch_lon]=useState(56)
let [temp,ch_temp]=useState(23)
//let [tempMin,ch_tempMin]=useState(0)
//let [tempMax,ch_tempMax]=useState(0)
let [pressure,ch_pressure]=useState(112)
let [humidity,ch_humidity]=useState(34)
let [weather_main,ch_weather_main]=useState("Clear")
let [description,ch_description]=useState("clear sky")
let [wind_deg,ch_wind_deg]=useState(20)
let [speed,ch_speed]=useState(0)

let [rise,sunrise]=useState(0)
let [set,sunset]=useState(0)

  let url=`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1ec4129fc5c5be84bf84b12f542b5b82`
//console.log(sample)
 function getinput(e){
if (e.key==="Enter"){
   axios.get(url)
   .then(res=>{
    ch_data(res.data)
    ch_name(res.data.name)
    console.log(res.data)
    ch_country(res.data.sys.country)
    ch_lon(res.data.coord.lon)
    ch_lat(res.data.coord.lat)
    ch_temp(Math.round(res.data.main.temp-273))
    ch_pressure(res.data.main.pressure)
    ch_humidity(res.data.main.humidity)
    ch_description(res.data.weather[0].description)
    ch_weather_main(res.data.weather[0].main)
    ch_speed(res.data.wind.speed)
    ch_wind_deg(res.data.wind.deg)
    sunrise(res.data.sys.sunrise)
    sunset(res.data.sys.sunset)

   })
}
  
}
function getinput_clicked(){
  axios.get(url)
  .then(res=>{
   ch_data(res.data)
   ch_name(res.data.name)
   console.log(res.data)
   ch_country(res.data.sys.country)
   ch_lon(res.data.coord.lon)
   ch_lat(res.data.coord.lat)
   ch_temp(Math.round(res.data.main.temp-273))
   ch_pressure(res.data.main.pressure)
   ch_humidity(res.data.main.humidity)
   ch_description(res.data.weather[0].description)
   ch_weather_main(res.data.weather[0].main)
   ch_speed(res.data.wind.speed)
   ch_wind_deg(res.data.wind.deg)
   sunrise(res.data.sys.sunrise)
   sunset(res.data.sys.sunset)

  })
}
let [ri,ch_ri]=useState(0)
let [se,ch_se]=useState(0)
let [se_statue,ch_se_status]=useState("AM")
let [ri_statue,ch_ri_status]=useState("PM")
useEffect(()=>{
  if(ri>12){
    ri=ri-12
    ch_ri_status("PM")
    //alert("jbkjmb")
}
else{
  ch_ri_status("AM")
}

   ri=Math.floor(rise/1000%60)
   ri=ri<10?'0'+ri:ri
   
console.log("rise "+ri)
console.log("rise_status "+ri_statue)


},[rise])
useEffect(()=>{
  se=Math.floor(set/1000%60)
  se=se-36
  if(se>12){
    se=se-12
    ch_se_status("AM")
    //alert("jbkjmb")
  }
  else{
  ch_se_status("PM")
  }
  se=se<10?'0'+se:se
  console.log("set "+se)
  console.log("set_status "+se_statue)
},[set])


let date=new Date()
let month=date.toLocaleString('default',{month:'long'})
let year=date.getFullYear()
 let day=date.getDay()
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let longmonth=date.toLocaleString('default',{month:'short'})
let [sec,ch_sec]=useState(0)
let [hour,ch_hour]=useState(0)
let [min,ch_min]=useState(0)
let [mer,ch_meri]=useState("")
hour=hour<10?'0'+hour:hour
min=min<10?'0'+min:min
sec=sec<10?'0'+sec:sec

let setTimer=()=>{
  
  let time=setInterval(()=>{
    let dat=new Date()
    ch_sec(dat.getSeconds())
    ch_meri("AM")
    ch_hour(dat.getHours())
    ch_min(dat.getMinutes())
  })
  
}
useEffect(()=>{
  
 setTimer()
  if(hour>=12){
    ch_meri("PM")
    }
    else{
    ch_meri("AM")
    }
  
    if(hour>12){
      ch_hour(hour-12)
        }

   

})



  return (
  <section className='weather_pro' style={{backgroundImage: weather_main=="Clouds"&& 'url("clouds.jpg")'}}>
   <article className='text'>
      <div id='input'>
        <input type="search" 
              value={loc}
              onChange={(e)=>ch_loc(e.target.value)}
              onKeyPress={getinput}
              placeholder='Search Country...'
             />
         <SearchIcon id="srch"
            onClick={getinput_clicked}
             />
      </div>
     <div id="dat">
      <h2 id="upper">{month}, {year}</h2>
      <div  id="lower">{days[day]}, {longmonth} {day}, {year}</div>
     </div>
     <div id="time">
          {hour}:{min}:{sec} {mer}
     </div>
     <div className='cou'>
       <div id="sub_country">
       <a href={`https://en.wikipedia.org/wiki/${name}`}><img src='loc.png' width="10px"/> </a><span id='sub'>{name}</span></div>
       <div id='country'>{country}</div>
      </div>
    <section id="middle">
       <div id='condition'>
            <div id="first_con"> 
       {weather_main=="Clear"&& <WbSunnyIcon id="sun"/>}
       {weather_main=="Clouds"&&  <CloudIcon/>}
              <div id="tem">{temp}<sup>o</sup>C</div>
           </div>  
            
          <div id='weather'>
            <div id='main'>Its {weather_main}</div>
            <div id='description'>{description}</div>
          </div>
         </div>
 
  <section className='altitude'>
    <div id='see_level'>
        <WbSunnyIcon id="sun_rise"/>
         < div>
           <div>Sun rise </div>
            <div>{ri}:00 {ri_statue}</div>    
          </div>
     </div>       
    <div id='see_level'>
          <WbTwilightIcon/>
          <div>
             <div>Sun Set</div>
            <div>{se}:00 {se_statue}</div>    
          </div>
      </div>           

    <div id='latlong'>
        <div id='see_level'> 
          <div id='lat_tex'>Latitude</div>
           <div id='lat_no'>{lat}</div>
        </div>
        <div id='see_level'>
           <div id='lat_tex'>Longtude</div>
           <div id='lat_no'>{lon}</div>
         </div>
       </div>
  </section>
  

 
     </section>
    <dv className="con">
      <div id="con">
        <div id='temp'>Tempreture</div>
        <div id="temp_no">{temp}<sup>o</sup>C</div>
      </div>
      <div id="con">
        <div id="temp">Wind speed</div>
        <div id="sp_no">{speed} km/hr</div>
      </div>
      <div id="con">
        <div id="temp">Pressure</div>
        <div id="pr_no">{pressure} hpa</div>
      </div>
      <div id="con">
        <div id="temp">Humidity</div>
        <div id="pr_no">{humidity}%</div>
      </div>
      <div id="con">
        <div id="temp">Wind deg</div>
        <div id="pr_no">{wind_deg}<sup>o</sup></div>
      </div>
    </dv>    
    </article>




























{/** 


    <div className='weather'>
      hey I am here
     <input type="search" 
       value={loc}
       onChange={(e)=>ch_loc(e.target.value)}
       onKeyPress={getinput}
     />
    
    {lat?  
        <div>solved  </div>:
        <div><CircularProgress
     style={{margin:100,marginLeft:100}}
     color="primary"
     size={150}
     thickness={2}
    /></div>
    
    } 
   
    </div>
  */}
  </section>
  )
}
