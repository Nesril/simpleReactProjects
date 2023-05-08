import React from 'react'

export default function app1({All,search_note,bar_new_note,Search,
    active,activenote,Completednote,Completed}) {
      console.log(1234567)
  return (
 <div id='footer' >
  {bar_new_note&&<div id='search'><button onClick={Search}>{!search_note?"Search":"Add Notes"}</button></div>}
     <div id='footer_left'>
         <button onClick={All}>{bar_new_note?"All":"Add"}</button>
          <button style={{display:Completed||!Search?"none":"block"}} onClick={activenote}>{!active?"Active":"Home"}</button>
          <button style={{display:active?"none":"block"}} onClick={Completednote}>{!Completed?"Completed":"Home"}</button>
    </div>
</div>
  )
}
