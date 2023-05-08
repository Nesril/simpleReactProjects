import React, { useEffect, useState } from 'react'
import Pokedata from './pokedata'
import Poj3 from './pok3'
import axios from 'axios'
import {CircularProgress} from '@mui/material'
import './pok.css'
export default function Pok1() {
    let [pokemon,setpokemon]=useState([])
    let [currenturl,getcurrenturl]=useState("https://pokeapi.co/api/v2/pokemon")
    let [nexturl,getnexturl]=useState()
    let [prevurl,getprevturl]=useState()
    let [loading,setLoading]=useState(true)
function getData(){
    setLoading(true)
  axios.get(currenturl+"?limit=3").then(res=>{
    console.log(res.data)
    setpokemon(res.data.results)
    getnexturl(res.data.next)
    getprevturl(res.data.previous)
     setLoading(false)
  })
}
useEffect(()=>{
    getData()
},[currenturl])
function next (){
    getcurrenturl(nexturl)
}
function prev(){
    getcurrenturl(prevurl)

}
  return (
    <section>
        <Poj3/>
    {loading?
         <div className='loadng'><CircularProgress id="load"/></div>:
        <div  className='orderdata'>         
          {pokemon.map(element=>(
            <div ><Pokedata name={element.name} url={element.url}
            next={nexturl?next:null} 
            previous={prevurl?prev:null}/></div>
          ))}
       
        </div>
    }
    </section>
  )
}
