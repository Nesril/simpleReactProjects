import React, { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Note(props){

 /*
   let [textarea_value,ch_value]=useState(()=>localStorage.getItem("value")||"")
 useEffect(()=>{
    localStorage.setItem("value",textarea_value)

 },[textarea_value])*/
    return(
<section>
     <div className="box">
            <div>{props.text}</div>
             <div className="date_and_delete">
                 <div>{props.time}</div>
                 <div><DeleteForeverIcon onClick={()=>props.handledeletenote(props.id)} id="delet"/></div>
            </div>
     </div>
</section>
    )
}