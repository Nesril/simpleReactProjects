import { useEffect,useRef, useState } from "react";
import Tvbanner from './Tv'
export default function TvApi({heart,Api_Tv,setApi_Tv,setheart,secart,cart}){

//console.log(Api_Tv)
//console.log(Tv)
useEffect(()=>{
 let hearts=Api_Tv.filter(e=>{
    return e.myfav===true
})
let carts=Api_Tv.filter(e=>{
    return e.oncart===true
})   
setheart(hearts)
secart(carts)
//console.log("hrts ",hearts)
//console.log("carts ",carts)
},[Api_Tv])
function SeparateByComa(value){
    //search it, it is fom google
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
let myRef=useRef()
let [isvissible,setisvissible]=useState()
//console.log("isvissible ",isvissible) ref={myRef} className={`notisvissible ${isvissible?"isvissible":""}`}
useEffect(()=>{
  let observer=new IntersectionObserver(e=>{
    let element=e[0]
    setisvissible(element.isIntersecting)
  })
  observer.observe(myRef.current)
},[])
return (
    <div>
         <div id="brandtv">
         <div id="brand_image" ref={myRef} className={isvissible?"vissible_brand":"notvissible_brand"}><img src={Api_Tv[9].src} height='100px' alt={Api_Tv[9].name}/></div>
         <div id='brand_footer'>
              <div>THE WORLDS NEW STANDARD</div>
              <div id="brand">Brand Smart Television</div>
              <div>{SeparateByComa(Api_Tv[9].cost)} <sup style={{color:"blue"}}>Brirr</sup></div>
         </div>
      </div >
        <div className='tv'>
        <Tvbanner Api_Tv={Api_Tv} setApi_Tv={setApi_Tv} heart={heart} setheart={setheart}
          secart={secart} cart={cart}
        />
       </div>
    </div>
)
} 

