import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {CoinList} from './crypto_api'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
export default function CryptoTable({currency_value}) {
let [list,setList]=useState([])
let [symbol,setsymbole]=useState()

function getList(){
    axios.get(CoinList(currency_value)).then(res=>{
        setList(res.data)
    })
}
useEffect(()=>{
    getList()
    if(currency_value=="INR"){
        setsymbole("#")
       }if(currency_value=="USD"){
        setsymbole("$")
       }
},[currency_value])
console.log(list)
function SeparateByComa(value){
    //search it, it is fom google
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
let [searchValue,setsearchValue]=useState("")
let filterlist=list.filter((list)=>{
    return list.name.toLowerCase().includes(searchValue)||list.symbol.toLowerCase().includes(searchValue)
})
  return (
    <section className='cryptotable'>
        <h1 id='cryptotableheader'>Cryptocurrency Prices by Market Cap</h1>
       <div id="searchBar">
          <input id='input' value={searchValue} 
          onChange={(e)=>setsearchValue(e.target.value)} 
          placeholder="Search Crypto"/>
        </div>
       <div className='content'>
           <div id="coin">Coin</div>
           <div id='price'>Price</div>
           <div id='change'>24h Change</div>
           <div>market cap</div>
       </div>
    {filterlist.map(e=>{
            let profit=e.price_change_percentage_24h>=0
      return (
      <div key={e.market_cap_rank}>
   <Link  to={`/pass/${e.id}`}>
     <div className='table' >
        <div id="left">
            <div><img src={e.image} width="50px"/></div>
            <div id='nametablecypto'>
               <div id="shortcryptoname">{e.symbol}</div>
               <div id="fullcryptoname">{e.name}</div>
            </div>
        </div>
        <div id='price'> {symbol?symbol:""} {SeparateByComa(e.current_price)}        </div>
        <div style={{color:profit?"green":"red"}}>{profit&&"+"} {e.price_change_percentage_24h?.toFixed(2)}%</div>
        <div id='marketcap'>
            {SeparateByComa(e.market_cap.toString().slice(0,-6)/**replace the last 6 digits and write M instead */)}M
        </div>
    </div>
      <hr />
      </Link>
      </div>
        )
    })}
 
      
    </section>
  )
}
