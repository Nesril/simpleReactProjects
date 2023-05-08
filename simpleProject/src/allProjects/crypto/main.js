import React,{useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pass from './pass'
import Assist from './Assist'
import Header from './Header'
import Home from './Home'
import "./crypto.css"
export default function Main() {
    let [currency_value,set_currency_value]=useState("INR")
    let [symbol,setsymbole]=useState()

  useEffect(()=>{
     if(currency_value=="INR"){
      setsymbole("#")
     }if(currency_value=="USD"){
      setsymbole("$")
     }
  },[currency_value])
//console.log(currency_value+" from main")
  return (
<BrowserRouter>
    <section className='main'>
          <Header set_currency_value={set_currency_value}/>  
  <Routes>
      <Route path='/' element={<Home currency_value={currency_value}/>}/>
      <Route path='/pass' element={<Pass/>}/>
      <Route path='/Pass/:id' element={<Assist currency_value={currency_value} symbol={symbol}/>}/>
      <Route path='*' element={<h1>404:Not Found</h1>}/>
  </Routes>

    </section>
</BrowserRouter>
  )
}
