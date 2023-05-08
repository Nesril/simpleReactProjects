import React, { useEffect, useState } from 'react'
import Footer from './app1'
import Lists from './lists'
import uuid from "react-uuid" 
export default function AssistorApp() {
    let [data,setData]=useState(JSON.parse(localStorage.getItem("datas"))||[])
    let [NewnoteValue,setNewnoteValue]=useState("")
function changedNote(e){
    setNewnoteValue(e.target.value)
}

useEffect(()=>{
  localStorage.setItem("datas",JSON.stringify(data))

},[data])

function KeyPressed(e){
  if(e.key==="Enter"&& NewnoteValue.length>0){
    let text={
        text:NewnoteValue,
        id:uuid(),
        check:false
    }
    console.log(text)
    setData((e)=>[...e,text])
    setNewnoteValue("")
  } 
}
function Added(){
    let text={
        text:NewnoteValue,
        id:uuid(),
        check:false
    }
    if(NewnoteValue.length>0){
        setData((e)=>[...e,text])
        setNewnoteValue("")

    }
}
let [bar_new_note,setbar_new_note]=useState(true)
function All(){
    setbar_new_note(!bar_new_note)
}
let [search_note,set_search_note]=useState(false)
function Search(){
    set_search_note(!search_note)
}

let[search_value,setsearch_value]=useState("")
function Searchnote(e){
    setsearch_value(e.target.value)
}
//////////////
let [active,setactive]=useState(false)
function activenote(){
    setactive(!active)
}
let [Completed,setCompleted]=useState(false)
function Completednote(){
    setCompleted(!Completed)
}
  return (
    <div className='AddNote'>
        <h1 id="header">THINGS TO DO</h1>
        {bar_new_note?

     <div className={active&&!search_note?'activenote':""} id={Completed?'activenote':""}>
        <div id="input_add">
            {!search_note? <div id='input'> <input value={NewnoteValue}
             onChange={changedNote} 
             onKeyPress={KeyPressed}
             placeholder='Add New'/>
             </div>:
              <div id='input'><input value={search_value}
              onChange={Searchnote} 
              placeholder='Search...'/></div>   
              }
      {!search_note&&<div id='add'> <button onClick={Added} >+</button> </div>  }   
        </div>
        </div>:""}
        <div id="lists_to_add">
         {data.length<1?"No, Data": <Lists  search_note={search_note} search_value={search_value} 
               setData={setData} data={data}  Completed={Completed}  active={active} /> } 
        </div>
        <div className='footer'>
          <Footer All={All} bar_new_note={bar_new_note}
           Search={Search} search_note={search_note}
           activenote={activenote} active={active}
           Completednote={Completednote}   Completed={Completed}
          />
        </div>

    </div>
  )
}
