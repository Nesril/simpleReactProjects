import React, { useEffect, useState } from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FinsUS from './headers/FundUs'
export default function Assistor({cart,setApi_Tv,heart,AllApi,setSpeaker_Tv}) {
  let [width,setwidth]=useState(window.innerWidth)
  let [responsive,makeresponsive]=useState(false)
  useEffect(()=>{
    window.addEventListener("resize",resizefun)
    function resizefun(){
      setwidth(window.innerWidth)
    }



    if(width<638){
      makeresponsive(true)
    }
    else{
      makeresponsive(false)
    }

  },[width])
  //console.log(width)
  let [siderendering,setsiderendering]=useState(false)
  function menubarclicked(){
    setsiderendering(!siderendering)
  }
  let[displayCart,setdisplayCart]=useState(false)
  function cartClicked(){
    setdisplayCart(!displayCart)
  }
  function removecart(){
    setdisplayCart(false)
  }
  //console.log("Assistor ",heart)
  //console.log("Assistor ",cart)
  function SeparateByComa(value){
    //search it, it is fom google
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(AllApi.map(e=>e.enter))

  function requestsent(id){
    setApi_Tv(element=>element.map(e=>{
      return e.id===id?{...e,requist:!e.requist}:e
    }))
    setSpeaker_Tv(element=>element.map(e=>{
      return e.id===id?{...e,requist:!e.requist}:e
    }))
  }
  /////////////for fav////////
  let[displayFav,setdisplayFav]=useState(false)
  function FavClicked(){
    setdisplayFav(!displayFav)
  }
  function removeFav(){
    setdisplayFav(false)
  }
  /////headers///
let [findit,allowtofind]=useState(false)
function find(){
  allowtofind(!findit)
}
  return (
    <div className='header'>
        <div className='header1'>
            <span>Abdurezaq <span id='ele'>Electronics</span></span> 
            <span className='head_button'><Button id="button">Buy now</Button></span>
        </div>
     {responsive?   
       <div className='responsiveHEader'>
           <div id="second_head_responsive">
             <div><MenuIcon onClick={menubarclicked}/></div>
             <div style={{marginLeft:"10px",color:"blue"}}>Wellcome</div>
            </div>
             <div ><ShoppingCartIcon style={{color:"goldenrod"}}/></div>
            <div className="siderendering"  id={siderendering?'visiblesiderendering':""}>  
               <div><AddLocationAltIcon id="find" onClick={find}/> Find US</div>
               <div><LocalShippingIcon id="delivery"/> Want delivery</div>
               <div><FavoriteIcon id="fav" onClick={FavClicked}/> Favorite</div>
               <div><ShoppingCartIcon id="cart" style={{color:"goldenrod"}} onClick={cartClicked}/> Cart</div>
               <div><HighlightOffIcon id="removesidebar" onClick={menubarclicked}/></div>
            </div>
        </div>:
        <div className='header2'>
            <div>Welcome to Your Electronics Store</div>
            <div id="second_head">
               <div><AddLocationAltIcon id="find" onClick={find}/> Find US</div>
               <div>|</div>
               <div><LocalShippingIcon id="delivery"/> Want delivery</div>
               <div>|</div>
               <div onClick={FavClicked}><FavoriteIcon id="fav"  /> Favorite</div>
               <div>|</div>
               <div><ShoppingCartIcon id="cart" onClick={cartClicked} style={{color:"goldenrod"}}/> Cart</div>
            </div>
        </div>
        }
        {displayFav&&
      <div className='cart'>
         <div id="cart_secon"> 
              <div className='header_cart'>My Favorite</div>
            {heart.length>0?
            <div>
              <div><HighlightOffIcon id="remove_Cart" onClick={removeFav}/></div>
              {heart.map(e=>{
              return(
            <div className='cart_store'>
                <div className='cart_image'><img src={e.src} height="100"/></div>
                <div id="leftside_cart">
                   <div>{SeparateByComa(e.cost)} <span style={{fontSize:"13px",color:"gold"}}>Birr</span></div>
                   <div><Button id="request_cart" style={{color:e.requist?"red":""}} onClick={()=>requestsent(e.id)}>{!e.requist?"Sent Request":"Requested"}</Button></div>
                </div> 
            </div>
              )
             })}
           </div>
             :
             <div><HighlightOffIcon id="remove_Cart" onClick={removeFav}/>
             <div>Nothing is in Your Favorite</div>
             </div>
          }
        </div>
      </div>
        }
      {displayCart&&
      <div className='cart'>
         <div id="cart_secon"> 
              <div className='header_cart'>My Store</div>
            {cart.length>0?
            <div>
              <div><HighlightOffIcon id="remove_Cart" onClick={removecart}/></div>
              {cart.map(e=>{
              return(
            <div className='cart_store'>
                <div className='cart_image'><img src={e.src} height="100"/></div>
                <div id="leftside_cart">
                   <div>{SeparateByComa(e.cost)} <span style={{fontSize:"13px",color:"gold"}}>Birr</span></div>
                   <div><Button id="request_cart" style={{color:e.requist?"red":""}} onClick={()=>requestsent(e.id)}>{!e.requist?"Sent Request":"Requested"}</Button></div>
                </div> 
            </div>
              )
             })}
           </div>
             :
             <div><HighlightOffIcon id="remove_Cart" onClick={removecart}/>
             <div>Nothing is in Your Cart</div>
             </div>
          }
        </div>
      </div>
        }
        <div>
         {findit&&<FinsUS allowtofind={allowtofind}/>} 
        </div>
    </div>
  )
}
