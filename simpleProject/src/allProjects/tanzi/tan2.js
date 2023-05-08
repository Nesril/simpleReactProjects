import React, { useEffect, useState } from "react";
import './tan.css'
import {nanoid} from 'nanoid'

export default function Tan(){
let [dice,setdice]=useState(randomDice())
let [count,no_count]=useState(0)
function newDie(){
    return{
        value:Math.ceil(Math.random()*6),
        id:nanoid(),
        hold:false
    }
}
function randomDice(){
    let dieArr=[]
   for (let i=0;i<10;i++){
      dieArr.push(newDie())     
   }
 return dieArr
}
function back(id){
setdice(ele=>{
    return ele.map(e=>{
        return  e.id==id?{...e,hold:!e.hold}:e
        
    })
})
}
let [ro,ch_ro]=useState(true)
function roll(){
if(ro){
    no_count(count+1)
    setdice(ele=> ele.map(e=>{
        // console.log(e);
          return e.hold?
          e:
          newDie()
         
     }))
}
else{
    ch_ro(true)
    setdice(randomDice())
} 
}
//console.log(ro)
//console.log(count)

useEffect(()=>{
    let holdit=dice.every(e=>e.hold)
    let allsaame=dice.every(e=>dice[0].value==e.value)
    if(holdit && allsaame){
        ch_ro(false)
        console.log("won")
    }
},[dice])

    return(
        <div>
           <article className="press">
         <div id="firow">
           {dice.map(e=>{
             return <div><button onClick={()=>back(e.id)} style={{backgroundColor:e.hold?"green":"white"}}>{e.value}</button></div>
        })}
         </div>
     </article>
     <article className="roll">
             <div><button onClick={roll}>{ro?"Roll":"Reset Game"}</button></div>
     </article>
        </div>
    )
}