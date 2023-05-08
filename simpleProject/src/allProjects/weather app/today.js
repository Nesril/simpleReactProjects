import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import GrainIcon from '@mui/icons-material/Grain';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Today(props) {

let hr1=props.fi_hr>12 ?  props.fi_hr-12: props.fi_hr
let hr2=props.tw_hr>12 ?  props.tw_hr-12: props.tw_hr
let hr3=props.th_hr>12 ?  props.th_hr-12: props.th_hr
hr1=hr1>10?hr1:"0"+hr1
hr2=hr2>10?hr2:"0"+hr2
hr3=hr3>10?hr3:"0"+hr3

let status1=props.fi_hr>12 ?"AM":"PM"
let status2=props.tw_hr>12 ?"AM":"PM"
let status3=props.th_hr>12 ?"AM":"PM"
  return (
    <section className='today'>
        <div id="today_time">
          <div id="today_by_hours">
              <div id="today_icon"> 
                  <div id="ds">{props.fi_des}</div>
                   <div>
                    {props.fi_main=="Clouds"&& <CloudIcon  id="cloud"/>}  
                    {props.fi_main=="Rain"&&<GrainIcon id="rain"/>}
                    {props.fi_main=="Clear"&&<WbSunnyIcon id="clear"/>}
                    {props.fi_main=="Snow"&&<AcUnitIcon/>}
                   </div>
              </div>
              <div id='today_tim'>{hr1}:{props.fi_min}0 {status1}</div>
              <div id='today_degre'>{props.fi_temp} <sup>o<sub>C</sub></sup></div>
              <div><DeviceThermostatIcon id="muic2"/> Real fell: {props.fi_feel} <sup>o</sup></div>
              <div><OpacityIcon id="muic2"/> Humidity: {props.fi_hum}%</div>
              <div><AirIcon id="muic2"/>Wind: {props.fi_wind} km/h</div>
          </div>
          <div id="today_by_hours">
              <div id="today_icon"> 
                   <div id="ds">{props.tw_des}</div>
                   <div>
                   {props.tw_main=="Clouds"&& <CloudIcon  id="cloud"/>}  
                    {props.tw_main=="Rain"&&<GrainIcon id="rain"/>}
                    {props.tw_main=="Clear"&&<WbSunnyIcon id="clear"/>}
                    {props.tw_main=="Snow"&&<AcUnitIcon/>}
                    </div>
              </div>
              <div id='today_tim'>{hr2}:{props.tw_min}0 {status2}</div>
              <div id='today_degre'>{props.tw_temp} <sup>o<sub>C</sub></sup></div>
              <div><DeviceThermostatIcon id="muic2"/> Real fell: {props.tw_feel}  <sup>o</sup></div>
             <div><OpacityIcon id="muic2"/> Humidity: {props.tw_hum}%</div>
              <div><AirIcon id="muic2"/>Wind: {props.tw_wind} km/h</div>
          </div>
          <div id="today_by_hours">
              <div id="today_icon"> 
                   <div id="ds">{props.th_des}</div>
                   <div>
                     {props.th_main=="Clouds"&& <CloudIcon id="cloud"/>}  
                     {props.th_main=="Rain"&&<GrainIcon id="rain"/>}
                     {props.th_main=="Clear"&&<WbSunnyIcon id="clear"/>}
                     {props.th_main=="Snow"&&<AcUnitIcon/>}
            
                  </div>
              </div>
              <div id='today_tim'>{hr3}:{props.th_min}0 {status3}</div>
              <div id='today_degre'>{props.th_temp} <sup>o<sub>C</sub></sup></div>
              <div><DeviceThermostatIcon id="muic2"/> Real fell: {props.th_feel}  <sup>o</sup></div>
             <div><OpacityIcon id="muic2"/> Humidity: {props.th_hum}%</div>
              <div><AirIcon id="muic2"/>Wind: {props.th_wind} km/h</div>
          </div>
        </div>
     <div id="foot1">
           <div id="rs"><Brightness5Icon id="muic"/> Rise: <span>04:00 AM</span> || <WbTwilightIcon id="muic"/> Set: <span>09:00 AM</span></div>
        </div>
    </section>
  )
}
