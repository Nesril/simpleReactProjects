import React ,{useState,useRef,useEffect,useNavigate} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
export default function Tv({Api_Tv,setApi_Tv,heart,setheart,secart,cart}) {

 // console.log(Tv)
  function SeparateByComa(value){
    //search it, it is fom google
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function heartclicked(id){
    setApi_Tv(e=>e.map(ele=>{
      return ele.id===id?{...ele,myfav:!ele.myfav}:{...ele}
    }))
   }
   function cartclicked(id){
    setApi_Tv(e=>e.map(ele=>{
      return ele.id===id?{...ele,oncart:!ele.oncart}:{...ele}
    }))
   }

  return (
    <div  >
     <div className='missle_discription'>
      {Api_Tv.map(e=>{
        return (
          <section className='tvBanner' key={e.id}>
             <div id='upper'>
                <div id="tvBanner_imagw"><img src={e.src} height='100px' width="150px" alt={e.name}/></div>
                <div id="name_cost">
                   <div style={{color:"goldenrod"}}>{e.name}</div>
                   <div style={{color:"blue"}}>{SeparateByComa(e.cost)} Birr</div>
                </div>
                <div id='heart_cart'>
                  <div>{e.myfav?<FavoriteIcon id="fav" onClick={()=>heartclicked(e.id)}/>:
                        <FavoriteBorderIcon  id="fav" onClick={()=>heartclicked(e.id)}/>}</div>
                  <div><ShoppingCartIcon onClick={()=>cartclicked(e.id)} id="cartbannner" style={{color:e.oncart?"goldenrod":"black"}}/></div>
              </div>
                <div style={{textAlign:"center"}}><Button id="button">Buy now</Button></div>
             </div>
          </section>
        )
      })}
    </div>
    </div>
  )
}
