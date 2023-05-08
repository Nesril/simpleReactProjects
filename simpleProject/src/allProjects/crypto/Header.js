import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Button } from '@mui/material'
export default function Header({set_currency_value}) {
const navigate = useNavigate();
function Return(){
 return navigate("/")
}
let [select_value,set_select_value]=useState("INR")
function Chang_selection(e){
    let {value}=e.target
    set_select_value(value)
}
//console.log(select_value+" from header")
useEffect(()=>{
    set_currency_value(select_value)

},[select_value])
  return (
    <section className='header'>
    <h1 id="header_text" onClick={Return}>Crypto Chaser</h1>
    <div id="sign">
        <select name="choice" value={select_value} onChange={Chang_selection}>
          <option value="INR" >INR</option>
          <option value="USD" >USD</option>
        </select>
        <div id='log'>
             <Button>Log in</Button>
        </div>
    </div>
</section>
  )
}
