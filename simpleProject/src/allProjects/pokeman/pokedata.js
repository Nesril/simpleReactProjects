import React,{ useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'

export default function Pokedata({name,url,next,previous}) {
    let [id,setid]=useState(1)
    let [url_o_feach_card,set_url_o_feach_card]=useState()
    function geturlforeach(){
        axios.get(url).then(res=>{
            console.log(res.data)
        })
    }
useEffect(()=>{
    geturlforeach()
},[url])
  return (
    <section className='pokedata' key={id}>
             <section className='pokemon'>
                <div id="code_no">#{id}</div>
                <div id="image">
                  <img src="lion.jpg" alt="...loading"/>
                </div>
                <h2 id="name">{name}</h2>
               <div id="type">type:{url}</div>
    </section>
        <div className="buttons">
            {previous&&<div><button onClick={previous}><ArrowBackIosNewIcon/></button></div>}
           {next&&<div><button onClick={next}><ArrowForwardIosIcon/></button></div>}
        </div>
  </section>   
  )
}
