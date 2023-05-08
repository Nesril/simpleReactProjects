import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import "./weather2.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {UilSearch} from '@iconscout/react-unicons'
import { Route, Link, BrowserRouter as Router,Routes ,Navigate } from 'react-router-dom'  
import Today from './today'
import Tomorrow from './tomorrow';
import Next from './next';

export default function Weather_2() {
let [to,ch_to]=useState(false)
let [tm,ch_tm]=useState(false)
let [nx,ch_nx]=useState(false)
let [location, ch_location]=useState("")
function to_clicked(){
    ch_to(true)
    ch_tm(false)
    ch_nx(false)
}
function tm_clicked(){
    ch_to(false)
    ch_tm(true)
    ch_nx(false)
}
function nx_clicked(){
    ch_to(false)
    ch_tm(false)
    ch_nx(true)
}
////////////get api////
let [name,ch_name]=useState("Adama")
let [country,ch_country]=useState("Ethiopia")
let [Gtemp,ch_Gtemp]=useState(30)
let [id,ch_id]=useState(123456)
let [day,ch_day]=useState("Saturday")
let [dayno,ch_dayno]=useState(29)
let [mon,ch_mon]=useState("oct")
let [year,ch_year]=useState(2022)
let [rise,sunrise]=useState(0)
let [set,sunset]=useState(0)


let [fi_fells,fi_ch_feels]=useState(0)
let [fi_temp,fi_ch_temp]=useState(23)
let [fi_humidity,fi_ch_humidity]=useState(34)
let [fi_weather_main,fi_ch_weather_main]=useState("Clear")
let [fi_description,fi_ch_description]=useState("clear sky")
let [fi_speed,fi_ch_speed]=useState(0)
let [fi_hr,fi_ch_hr]=useState(0)
let [fi_min,fi_ch_mi]=useState(0)

let [tw_fells,tw_ch_feels]=useState(0)
let [tw_temp,tw_ch_temp]=useState(23)
let [tw_humidity,tw_ch_humidity]=useState(34)
let [tw_weather_main,tw_ch_weather_main]=useState("Clear")
let [tw_description,tw_ch_description]=useState("clear sky")
let [tw_speed,tw_ch_speed]=useState(0)
let [tw_hr,tw_ch_hr]=useState(0)
let [tw_min,tw_ch_mi]=useState(0)

let [th_fells,th_ch_feels]=useState(0)
let [th_temp,th_ch_temp]=useState(23)
let [th_humidity,th_ch_humidity]=useState(34)
let [th_weather_main,th_ch_weather_main]=useState("Clear")
let [th_description,th_ch_description]=useState("clear sky")
let [th_speed,th_ch_speed]=useState(0)
let [th_hr,th_ch_hr]=useState(0)
let [th_min,th_ch_mi]=useState(0)


let [tommorow1,ch_tommorow1]=useState()
let [tommorow2,ch_tommorow2]=useState()
let [tommorow3,ch_tommorow3]=useState()

let[rain,ch_rain]=useState(false)
let[cloud,ch_cloud]=useState(false)
let[snow,ch_snow]=useState(false)
let[clear,ch_clear]=useState(true)
//////////////////////
let url=`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1ec4129fc5c5be84bf84b12f542b5b82`
useEffect(()=>{
    ch_Gtemp(Math.round(((fi_temp+tw_temp+th_temp)/3)*100)/100)
    //Snow Clear rain Clouds
   if(fi_weather_main=="Clouds"&&tw_weather_main=="Clouds"||fi_weather_main=="Clouds"&&th_weather_main=="Clouds"||th_weather_main=="Clouds"&&tw_weather_main=="Clouds"){
    ch_cloud(true); ch_snow(false)
    ch_clear(false); ch_rain(false)
   }
   else if(fi_weather_main=="Snow"&&tw_weather_main=="Snow"||fi_weather_main=="Snow"&&th_weather_main=="Snow"||th_weather_main=="Snow"&&tw_weather_main=="Snow"){
    ch_cloud(false); ch_snow(true)
    ch_clear(false); ch_rain(false)
   }
   else if(fi_weather_main=="Rain"&&tw_weather_main=="Rain"||fi_weather_main=="Rain"&&th_weather_main=="Rain"||th_weather_main=="Rain"&&tw_weather_main=="Rain"){
    ch_cloud(false); ch_snow(false)
    ch_clear(false); ch_rain(true)
   }
   else{
    ch_cloud(false); ch_snow(false)
    ch_clear(true); ch_rain(false)
   }

},[tw_temp])
function GetImage(element){
   if(element.key="Enter"){
       axios.get(url)
      .then(get=>{
       console.log(get.data)
       ch_name(get.data.city.name)
       ch_country(get.data.city.country)
       ch_id(get.data.city.id)
       sunrise(new Date(get.data.city.sunrise))
       sunset(new Date(get.data.city.sunset))
       console.log(new Date(get.data.list[0].dt_txt))
       ch_day(days[(new Date(get.data.list[0].dt_txt)).getDay()])
       ch_dayno((new Date(get.data.list[0].dt_txt)).getDate())
       ch_mon((new Date(get.data.list[0].dt_txt)).toLocaleString('default',{month:'short'}))
       ch_year((new Date(get.data.list[0].dt_txt)).getFullYear())

       fi_ch_feels(Math.round(get.data.list[0].main.feels_like-273))
       fi_ch_temp(Math.round(get.data.list[0].main.temp-273))
       fi_ch_humidity(get.data.list[0].main.humidity)
       fi_ch_weather_main(get.data.list[0].weather[0].main)
       fi_ch_description(get.data.list[0].weather[0].description)
       fi_ch_speed(get.data.list[0].wind.speed)
       fi_ch_hr((new Date(get.data.list[0].dt_txt).getHours()))
       fi_ch_mi((new Date(get.data.list[0].dt_txt).getMinutes()))
       
       /////////////////////////////second box////////////////
       tw_ch_feels(Math.round(get.data.list[1].main.feels_like-273))
       tw_ch_temp(Math.round(get.data.list[1].main.temp-273))
       tw_ch_humidity(get.data.list[1].main.humidity)
       tw_ch_weather_main(get.data.list[1].weather[0].main)
       tw_ch_description(get.data.list[1].weather[0].description)
       tw_ch_speed(get.data.list[1].wind.speed)
       tw_ch_hr((new Date(get.data.list[1].dt_txt).getHours()))
       tw_ch_mi((new Date(get.data.list[1].dt_txt).getMinutes()))

      /////////////////////////////third box////////////////
      th_ch_feels(Math.round(get.data.list[2].main.feels_like-273))
      th_ch_temp(Math.round(get.data.list[2].main.temp-273))
      th_ch_humidity(get.data.list[2].main.humidity)
      th_ch_weather_main(get.data.list[2].weather[0].main)
      th_ch_description(get.data.list[2].weather[0].description)
      th_ch_speed(get.data.list[2].wind.speed)
      th_ch_hr((new Date(get.data.list[2].dt_txt).getHours()))
      th_ch_mi((new Date(get.data.list[2].dt_txt).getMinutes()))

      ////////////////////////////tommorow first/////////////////
      ch_tommorow1(get.data.list[5])
      ch_tommorow2(get.data.list[6])
      ch_tommorow3(get.data.list[7])
        })
  
      }
}
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return (
<Router>
    <section className='Everything'> 
    <div id="inpt">
    <UilSearch id="sr"
            onClick={GetImage}
             />
       <input type="text" 
       value={location}
       onChange={e=>ch_location(e.target.value)}
        onKeyPress={GetImage}
        placeholder="Search Country"
          />

    </div>
<section className='upperr'>
         <div id='first'>
          <h1 id="first_left">Today</h1>
     </div>
     <div id="second">
        <h2>{Gtemp}<sup>o<sub>C</sub></sup></h2>
        <div>
            
            {cloud&& <CloudIcon  id="wcloud"/>}  
            {rain&&<GrainIcon id="wrain"/>}
            {clear&&<WbSunnyIcon id="sun"/>}
            {snow&&<AcUnitIcon id="wsnow"/>}
        </div>
     </div>
     <div id="thired">
         <div> <a href={`https://en.wikipedia.org/wiki/${name}`}><AddLocationAltIcon id="loc"/></a> {name}, {country} {id}</div>
         <div id='tm'>{day}, {dayno} {mon} {year}  </div>
     </div>
 </section>

      <div id="links">
          <ul>
             <li><Link to="/" onClick={to_clicked} style={{color:to?"goldenrod":"white"}}>Today</Link></li>
             <li><Link to="/tomorrow" onClick={tm_clicked} style={{color:tm?"goldenrod":"white"}}>Tomorrow</Link></li>
             <li><Link to="/next" onClick={nx_clicked} style={{color:nx?"goldenrod":"white"}}>Next 6 Days</Link></li>
          </ul>
      </div>
      <Routes>
          <Route path='/' element={<Today 
            fi_feel={fi_fells} fi_temp={fi_temp} fi_hum={fi_humidity} fi_wind={fi_speed} fi_main={fi_weather_main} fi_des={fi_description}  fi_hr={fi_hr} fi_min={fi_min}
             tw_feel={tw_fells} tw_temp={tw_temp} tw_hum={tw_humidity} tw_wind={tw_speed} tw_main={tw_weather_main} tw_des={tw_description} tw_hr={tw_hr} tw_min={tw_min}
             th_feel={th_fells} th_temp={th_temp} th_hum={th_humidity} th_wind={th_speed} th_main={th_weather_main} th_des={th_description} th_hr={th_hr} th_min={th_min}
          />}/>
          <Route path='/tomorrow' element={<Tomorrow/>}/>
          <Route path='/next' element={<Next/>}/>
      </Routes>
    </section>
</Router>
  )
}
