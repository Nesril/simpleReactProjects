import React, { useState } from "react";
import Not3 from './note3'
import NewNote from './new_note'

export default function Note(props){
    let alltexts=props.notes.filter((e)=>{
        return e.text.toLowerCase().includes(props.value_searcbar)
    })
   
   /* filter((nam)=>{
        return nam.includes(props.value_searcbar)
    }))*/
  // console.log(alltexts)
    return (
  <section >
    <div>{props.value_searcbar}</div>
      <div className="notes">
        {alltexts.map(e=><Not3 handledeletenote={props.handledeletenote} id={e.id}text={e.text} time={e.time}/>)}
          <NewNote  newnote={props.handleaddnote}/>
    </div>   
</section>
    )
}