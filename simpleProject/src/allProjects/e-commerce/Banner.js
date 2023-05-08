import React ,{useState,useRef,useEffect,useNavigate} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'
export default function Banner() {

  let responsive={
    0:{
        items:1
    },
    350:{
        items:2
 
    },
    500:{
        items:3
    },
    800:{
        items:4
    }
  }
 let [bannerdata,setbannerdata]=useState([{
    src:"Tv/tv2.jpg",
    name:"Smart TV",
    type:"",
    cost:200,
    id:uuid(),
    myfav:false,
    oncart:false,
    typ:""
 },
 {
    src:"gpus/BW7.jpg",
    name:"Smart Speaker",
    type:"Base WIreless",
    cost:100,
    id:uuid(),
    myfav:false,
    oncart:false,
    typ:"Speaker"
 },{
    src:"gpus/BS9(MODERN).jpg",
    name:"Modern Speaker",
    type:"Base Stereo",
    cost:100,
    id:uuid(),
    myfav:false,
    oncart:false,
    typ:"Speaker"
 }])
 function heartclicked(id){
  setbannerdata(e=>e.map(ele=>{
    return ele.id===id?{...ele,myfav:!ele.myfav}:{...ele}
  }))
 }
 function cartclicked(id){
  setbannerdata(e=>e.map(ele=>{
    return ele.id===id?{...ele,oncart:!ele.oncart}:{...ele}
  }))
 }
 /*let myRef=useRef()
 let [isvissible,setisvissible]=useState()
 //console.log("isvissible ",isvissible) ref={myRef} className={`notisvissible ${isvissible?"isvissible":""}`}
 useEffect(()=>{
   let observer=new IntersectionObserver(e=>{
     let element=e[0]
     setisvissible(element.isIntersecting)
   })
   observer.observe(myRef.current)
 },[])*/
 let items=bannerdata.map(e=>{
    return(
        <div id='baners' key={e.id}  >
          <Link  to={`/${e.typ}`}>          
            <div> <img src={e.src} alt={e.name} id="bannerimg" /></div>
          </Link>
            <div id="birr_fav">
                {e.cost} Birr &ensp;
                {e.myfav?<FavoriteIcon id="fav" onClick={()=>heartclicked(e.id)}/>:<FavoriteBorderIcon  id="fav" onClick={()=>heartclicked(e.id)}/>}
             </div>
            <div id="cart_buy">
               <div><ShoppingCartIcon onClick={()=>cartclicked(e.id)} id="cartbannner" style={{color:e.oncart?"goldenrod":"black"}}/></div>
               <div><Button id="button">Buy now</Button></div>
            </div>
         
        </div>
    )
 })
  return (
<div  className='bannerback'>
    <div className='banner'>
    <AliceCarousel
        mouseTracking        
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={items}
        />
    </div>
   </div>
  )
}
