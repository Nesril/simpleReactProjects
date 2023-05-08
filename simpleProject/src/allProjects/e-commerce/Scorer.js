import React, { useState } from 'react'
import "./ecom.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Assistor from './Assistor'
import Banner from './Banner';
import TvApi from './Tv/Tvapi';
import Speaker1 from './Speaker/Speaker1';
import Decoder from './Decoder';
import Ampole from './Ampole';
import Remote from './Remote';
import {Tv} from './Tv/Api';
import uuid from 'react-uuid';
import {Speaker} from './Speaker/Api'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
export default function Scorer() {
  let [heart,setheart]=useState()
  let [cart,secart]=useState()
  let [Api_Tv,setApi_Tv]=useState(Tv)
  let [Speaker_Tv,setSpeaker_Tv]=useState(Speaker)
  let [AllApi,setAllApi]=useState([{
    Api_name:"Television",
    Api_route:"",
    Api_data:Api_Tv,
    Api_id:uuid(),
    enter:true
  },{
    Api_name:"Speaker",
    Api_route:"Speaker",
    Api_data:Speaker_Tv,
    Api_id:uuid(),
    enter:false
  }
])
  //console.log("Scorer ",heart)
//console.log(Api_Tv)
function RouteClicked(id){
  setAllApi(ele=>ele.map(e=>{
    return e.Api_id===id?{...e,enter:true}:{...e,enter:false}
  }))
}
  return (
    <BrowserRouter>
    <section>
          <div>
              <Assistor Speaker_Tv={Speaker_Tv} AllApi={AllApi} setSpeaker_Tv={setSpeaker_Tv}
              cart={cart} heart={heart}Api_Tv={Api_Tv} setApi_Tv={setApi_Tv}/>
          </div>
          <div>
             <Banner />
          </div>
          <div className='links_Route'>
            {AllApi.map(e=>{
              return (
                <div key={e.Api_id} style={{borderRadius:"5px",background:e.enter?"black":"transparent",padding:"5px"}} onClick={()=>RouteClicked(e.Api_id)}><Link to={`/${e.Api_route}`}>{e.Api_name}</Link></div>
              )
            })}
          </div>
        <Routes>
            <Route path='/'element={<TvApi setApi_Tv={setApi_Tv} Api_Tv={Api_Tv} heart={heart} secart={secart} cart={cart} setheart={setheart}/>}/>
            <Route path='/Speaker'element={<Speaker1 setSpeaker_Tv={setSpeaker_Tv} Speaker_Tv={Speaker_Tv} 
                                               heart={heart} 
                                              secart={secart} cart={cart} setheart={setheart} />}/>
            <Route path='/Decoder'element={<Decoder/>}/>
            <Route path='/Ampole'element={<Ampole/>}/>
            <Route path='/Remote'element={<Remote/>}/>
        </Routes>
        <section className='footer'>
           <div id='footer_2nd'>
              <div id="rights">&copy; All rights Reserved</div>
             <div id="icons">
               <div><EmailIcon/></div>
               <div><InstagramIcon/></div>
               <div><TelegramIcon/></div>
               <div><LinkedInIcon/></div>
               <div><FacebookIcon/></div>
             </div>
           </div>
        </section>
    </section>
   </BrowserRouter>
  )
}
