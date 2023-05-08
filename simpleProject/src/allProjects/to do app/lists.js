import React, { useState } from 'react'

export default function Lists({data,search_note,search_value,active,Completed,setData}) {
    //console.log(data)
    function Checked(id){
        setData(e=>e.map(ele=>{
            console.log(e)
            return ele.id===id?{...ele,check:!ele.check}:ele
        }))
    }
let filerSearch=data.filter(e=>{
    return e.text.includes(search_value)
})
//alert(active)
let filterActive=data.filter(e=>{
    return e.check===false
})
let filtercomplete=data.filter(e=>{
    return e.check===true
})
console.log(filterActive)
console.log(filtercomplete)
function deletNote(id){
    setData(data.filter(e=>e.id!==id))

}
  return (
    <div>
     {!search_note&& data.map(e=>{
        return (
            <div  key={e.id} style={{display:active||Completed?"none":"block"}}>
               <div id="check_task">
                    <div id="check"><input checked={e.check} onChange={()=>Checked(e.id)} type="checkbox"/></div>
                    <div id="task">{e.text}</div>
                    <div id="delet" onClick={()=>deletNote(e.id)}>X</div>
                </div>
            </div>
        )}
       )}
       {search_note&& filerSearch.map(e=>{
        return (
            <div  key={e.id}>
            <div id="check_task">
                 <div id="check"><input value={e.check} onChange={()=>Checked(e.id)} type="checkbox"/></div>
                 <div id="task">{e.text}</div>
             </div>
         </div>
        )}
       )}
       {(!search_note&&active)&&(filterActive.length>0?filterActive.map(e=>{
        return (
            <div  key={e.id} style={{display:Completed?"none":"block"}}>
            <div id="check_task">
                 <div id="task"># {e.text}</div>
             </div>
         </div>
        )}
       ):<h1>None of them are Active</h1>)}

         {(!search_note&&Completed)&&(filtercomplete.length>0?filtercomplete.map(e=>{
        return (
            <div  key={e.id} style={{display:active?"none":"block"}}>
            <div id="check_task">
                 <div id="task">* {e.text}</div>
             </div>
         </div>
        )}
       ):<h1>None of them are completed </h1>)}
    </div>
  )
}
