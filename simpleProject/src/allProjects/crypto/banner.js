import React, { useEffect, useState } from 'react'
import {TrendingCoins,CoinList} from './crypto_api'
import 'react-alice-carousel/lib/alice-carousel.css';
import {CircularProgress} from '@mui/material'
import AliceCarousel from 'react-alice-carousel'
import {Link} from "react-router-dom";
import axios from 'axios'
export default function Banner({currency_value}) {
    //console.log(currency_value+" from banner")
  let [dataofbanner,setdataofbanner]=useState([])
  let [loading,se_loading]=useState(true)
  let [symbol,setsymbole]=useState()

  let responsive={
    0:{
        items:1
    },
    350:{
        items:2
 
    },
    500:{
        items:3
    },
    800:{
        items:4
    }
  }
 
  function SeparateByComa(value){
    //search it, it is fom google
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let items=dataofbanner.map(e=>{
    let profit=e.price_change_percentage_24h>=0
  
    return(
    <div className='ban'>
        <Link  to={`/pass/${e.id}`}>            
          <img src={e?.image} alt={e.name} height="80"/>
        </Link>
        <div id='midle'>
             <div>{e.symbol}&ensp;</div>
             <div style={{color:profit?"green":"red"}}>{profit&&"+"} {e.price_change_percentage_24h?.toFixed(2)}%</div>
        </div>
             <div>{symbol?symbol:""} {SeparateByComa(e.current_price)}</div>
        </div>
    

    )
  })
  //dataofbanner.map(e=>console.log(e))
  function getbanner(){  
    se_loading(true)
    axios.get( TrendingCoins(currency_value))
    .then(res=>{
        setdataofbanner(res.data)
        se_loading(false)
    })  
}
console.log(symbol)
useEffect(()=>{
    getbanner()
   if(currency_value=="INR"){
    setsymbole("#")
   }if(currency_value=="USD"){
    setsymbole("$")
   }
},[currency_value])

  return (
    <div>
    {loading?<CircularProgress/>:
     <AliceCarousel
        mouseTracking        
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
      disableDotsControls
      disableButtonsControls
        responsive={responsive}
        items={items}
        />
      
    }
    </div>
  )
}
