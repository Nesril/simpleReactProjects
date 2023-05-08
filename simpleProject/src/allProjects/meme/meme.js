import React, { useState } from "react";
import Gene from './gene'
import './meme.css'
import './mode.css'
export default function Meme(){

 return(
<section>
    <div className="gene">
        <Gene />
    </div>
</section>
 )
}