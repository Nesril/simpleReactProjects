import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {SingleCoin} from './crypto_api'
import Coin from './coin'
import Chart from './chart'
import {LinearProgress} from '@mui/material'

export default function Assist({currency_value,symbol}) {
let {id}=useParams()
let [SingleCoindata,setSingleCoindata]=useState([])
let [loading,setloading]=useState(true)
function singlecrypto(){
  setloading(true)
  axios.get(SingleCoin(id)).then(res=>{
    setSingleCoindata(res.data)
    setloading(false)

  })
}
useEffect(()=>{
  singlecrypto()
},[id])
  return (
    <div className='Assist'>
   {loading?
         <LinearProgress id='lineprogress'/>:
        <>          
          <div>
             <Coin SingleCoindata={SingleCoindata} symbol={symbol} currency_value={currency_value}/>
          </div>
          <div id='chart'>
             <Chart currency_value={currency_value}  id={id}/>
          </div>
         </>

          }
    </div>
  )
}
