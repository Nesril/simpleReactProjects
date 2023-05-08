import React,{useState,useEffect,useRef} from 'react'
import Speaker from './Speaker2'
export default function Speaker1({heart,Speaker_Tv,setSpeaker_Tv,setheart,secart,cart}) {
 //console.log(Api_Tv)
//console.log(Tv)
useEffect(()=>{
    let hearts=Speaker_Tv.filter(e=>{
       return e.myfav===true
   })
   let carts=Speaker_Tv.filter(e=>{
       return e.oncart===true
   })   
   setheart(hearts)
   secart(carts)
   //console.log("hrts ",hearts)
   //console.log("carts ",carts)
   },[Speaker_Tv])
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
            <div id="brand_image" ref={myRef} className={isvissible?"vissible_brand":"notvissible_brand"}><img src={Speaker_Tv[9].src} height='100px' alt={Speaker_Tv[9].name}/></div>
            <div id='brand_footer'>
                 <div>THE WORLDS NEW STANDARD</div>
                 <div id="brand">Brand Speaker</div>
                 <div>{SeparateByComa(Speaker_Tv[9].cost)} <sup style={{color:"blue"}}>Brirr</sup></div>
            </div>
         </div >
           <div className='tv'>
           <Speaker setSpeaker_Tv={setSpeaker_Tv} Speaker_Tv={Speaker_Tv} heart={heart} 
            secart={secart} cart={cart} setheart={setheart}
           />
          </div>
       </div>
   )
}
