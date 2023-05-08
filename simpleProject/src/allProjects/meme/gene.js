import React, { useState } from "react";
import Image from './datameme'

const Gene=()=>{
    
    let [up,changedup]=useState("Shut up")
    let [bellow,changedbellow]=useState("and take my money")
function upperfun(event){
    changedup(event.target.value)
}
function bottomfun(event){
    changedbellow(event.target.value)
}
 
console.log(Image.data)

let [imag,ch_im]=useState("meme1.jpg")
let [nameit,ch_no]=useState("")

function imagechange(){
    let num=Math.floor(Math.random()*Image.data.length)
    let url=Image.data[num].url
    let nt=Image.data[num].name
  ch_im(url)
  ch_no(nt)
     
}
let [size1,sizechange]=useState(30)
let [size2,sizechange2]=useState(30)
function plus1(){
    sizechange(size1+2)
}
function plus2(){
    sizechange2(size2+2)
}
function minus1(){
    sizechange(size1-2)
}
function minus2(){
    sizechange2(size2-2)
}

let kelay={
    color:"red",
    fontSize: `${size1}px`,
    backgroundColor: "#44014C",
 

}
let ketach={
    color:"red",
    fontSize: `${size2}px`,
    backgroundColor: "#44014C"

}
 let imagee=document.querySelector(".Imaa")
console.log(imagee)
 function over(){
     imagee.classList.add("over")
 }
 function out(){
    imagee.classList.remove("over")

 }
 
    return(
  <section className="pro5">
       <div className="nav">
         <div id="fi">
           <div><img src="bravegirl.jpg" width="30px"/> </div>
           <div id="tit">Meme Generator</div>
         </div>
            <div id="la"> React Course - Project 3</div>
       </div>
       <div className="inp">
           <div id="up"><input type="text" onChange={upperfun} value={up}/></div>
           <div id="txt">Have a Nice Fun<br/>{nameit &&<span>NM: {nameit}</span>}</div>
           <div id="bellow"><input type="text" onChange={bottomfun} value={bellow}/></div>
       </div>
       <div className="size">
            <div id="left">
                <button id="plus" onClick={plus1}>+</button>
                &ensp;&ensp;&ensp;&ensp;
                <button id="minus"onClick={minus1}>-</button>
            </div>
            <div id="right">
                <button id="plus"onClick={plus2}>+</button>
                &ensp;&ensp;&ensp;&ensp;
                <button id="minus"onClick={minus2}>-</button>
            </div>
       </div>

       <div className="butchan">
         <button id="chan" onClick={imagechange}>Get anew meme image <img src="but.jpg" width="20px"/> </button>
       </div>
       <h1 className="uptxt" style={kelay}>{up.toUpperCase()}</h1>
       <h1 className="beltxt" style={ketach}>{bellow.toUpperCase()}</h1>
       <div className="meme-image">
         <img src={imag} width="600px" height="400px" onMouseOver={over} onMouseOut={out} className="Imaa"/> 
       </div>
     
  </section>
    )
}

export default Gene