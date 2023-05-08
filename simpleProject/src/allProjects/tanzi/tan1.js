import React, { useEffect, useState } from "react";
import Tan from './tan2'
import './tan.css'
import {nanoid} from 'nanoid'
export default function Tanzi(){
let [dice,setdice]=useState(diece())
let [ro,ch_ro]=useState(true)
let[win,ch_states]=useState(false)
let [attempt,ch_attempy]=useState(localStorage.getItem("high_score")||0)
//console.log(attempt)

useEffect(()=>{
     let allsame=dice.every(el=>!el.hide)//malet hullum false kehone or held ketederege
     let fir=dice[0].value
     let likewise=dice.every(e=>e.value==fir)
     if(allsame && likewise){
        ch_ro(false)
        ch_states(true)
     }
     if(win){
        console.log(count)
        console.log(attempt)
        localStorage.setItem("high_score",attempt)
        ch_attempy(count>(6-attempt)?(6-count):attempt)
        if(count<attempt){
            console.log("Congrats HighScores")
        }
    }
    
},[dice,win,attempt])

function ranvalue(){
    return Math.ceil(Math.random()*6)
}
function data(){
  return  {value:ranvalue(),
    hide:true,
    id:nanoid()}
  }
function diece(){
    let selectedarr=[]
    for(let i=0;i<10;i++){
        selectedarr.push(data())
         }

 return selectedarr
}
function roll(){
 if(ro){
    no_count(count-1)
    setdice(ele=> ele.map(e=>{
       // console.log(e);
         return !e.hide?
         e:
         data()
        
    }))
}
else{  
    no_count(6)
    ch_states(false)
    mess(true)
    ch_ro(true)
    setdice(diece())
}

}

function back(id){
    setdice(element=>{
        return element.map(ele=>{
            return ele.id==id?{...ele,hide:!ele.hide}:ele
        })
    })
    
}
let [count,no_count]=useState(6)
let [dis,mess]=useState(true)
if(count<1&&ro){
    ch_ro(false)
    console.log(" finished")
    mess(false)
}

//console.log(dice.map(e=>e.hide))
    return(
  <section className="tanzi">
    <article className="tanzitext">
        <h1>Tenzies</h1>
        <div>Roll until all dice are the same. click each die to freeze it at its current value between rolls </div>
    </article>
     <article className="press">
         <div id="firow">
          {dice.map(e=>{
           return  <div><button onClick={()=>back(e.id)} style={{ backgroundColor:e.hide?"white":"green"}} key={e.id}>{e.value}</button></div>
        })}
         </div>
     </article>
     <div className="score_high">High Score: {attempt} attempts</div>
     {!win?<div className="message">{dis?`You Have ${count} Chances To Roll`:"Game Over"}</div>:
     <div className="message">Congrats You Win</div>}
     
     <article className="roll">
             <div><button onClick={roll}>{ro?"Roll":"Reset Game"}</button></div>
     </article>
   
  </section>
    )
}