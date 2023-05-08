import React, { useEffect, useState } from "react";
import './note.css'
import uuid from "react-uuid"
import Not2 from './note2'
import SearchIcon from '@mui/icons-material/Search';

export default function Note(){
let date=new Date(Date.now()).toLocaleDateString("en-Gb",{hour:"2-digit",minute:"2-digit",second:"2-digit"})
let [notes,setNotes]=useState(JSON.parse(localStorage.getItem("YourNotes"))||[{
    id:uuid(),
    text:"this is our note",
    time:date
},{
    id:uuid(),
    text:"this is second note",
    time:date
}])
let [dark,setDark]=useState(false)
function dark_mode(){
    setDark(!dark)
}
function addnote(note_text){
let newnote={
    id:uuid(),
    text:note_text,
    time:date
}
    setNotes([...notes,newnote])
}
useEffect(()=>{
  localStorage.setItem("YourNotes",JSON.stringify(notes))

},[notes])
function deletenote(id){
   // console.log(id+" deleted")
   setNotes(notes.filter(e=>e.id!==id))
}
////////////////the foolowing code is for search bar//////////////
let [value_searcbar,change_value_searcbar]=useState("")
    return (
<div className={dark?"dark":"pro6"}>
    <div className="header">
        <h1 id={dark&&"white"}>Notes</h1>
        <div><button onClick={dark_mode}>Toggle Mode</button></div>
    </div>
    <div className="search">
         <SearchIcon id="search_icon"/><input type="text" value={value_searcbar} 
          onChange={(e)=>change_value_searcbar(e.target.value)}
         />  
    </div>
    <Not2 value_searcbar={value_searcbar} notes={notes} handleaddnote={addnote} handledeletenote={deletenote}/>
</div>
    )
}