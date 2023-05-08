import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {HistoricalChart} from './crypto_api'
import {CircularProgress} from '@mui/material'
import LineChart  from './LineChart'
import { json } from 'react-router-dom'

export default function Chart({id,currency_value}) {
  let [hist_data,sethist_data]=useState()
 let [day,setday]=useState(1)
 function dayon_button(day_from_buttton){
  setday(day_from_buttton)
 }
 function makedata(){
  axios.get(HistoricalChart(id,day,currency_value)).then(res=>{
    sethist_data(res.data.prices)
})
}
useEffect(()=>{
  makedata() 
},[currency_value])
if(hist_data){
  console.log(hist_data.map(e=>e[1]))
  console.log(hist_data)
}
////////////////////////////////////////////


  return (
    <div>  
      {!hist_data?
      <div className='ChartLoad'> <CircularProgress id="ChartLoad"/></div>: <LineChart userdata={{
              labels:hist_data.map(e=>{
             let date=new Date(e[0])
             let min=date.getMinutes()>10?date.getMinutes():`0${date.getMinutes()}`
             let time=date.getHours()>12?`${date.getHours()-12}:${min}`:
                         `${date.getHours()}:${min}`
             return day===1?time:date.toLocaleDateString("en-Gb")
                  }),
          datasets:[{
           label:`"Cost of Abebe over the Year"`,
           data:hist_data?hist_data.map(e=>e[1]):"",
           borderColor:"gold",
              borderWidth:1,

          }]
     }}
     dayon_button={dayon_button} />}
    <br/> <br/> <br/> <br/> <br/>
    </div>
  )
}
