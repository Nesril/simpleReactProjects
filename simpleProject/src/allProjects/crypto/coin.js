import React,{useEffect,useState} from 'react'
import parse from 'html-react-parser';
export default function Coin({SingleCoindata,currency_value,symbol}) {
    console.log( typeof SingleCoindata)
    console.log(SingleCoindata)    
    //let [symbol,setsymbole]=useState()
    function SeparateByComa(value){
        //search it, it is fom googley
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
   
  return (
    <div>
   
          <section id='coinlist' key={SingleCoindata.id}>
          <div>
              <img src={SingleCoindata.image.large} height="200" alt={SingleCoindata.name}/>
          </div>
          <div id='nameofcryptoeach'>{SingleCoindata.name}</div>
          <p id='description'>{parse(SingleCoindata.description.en.split(". ")[0])}.</p>
         <div className='lists'>
            <div id='rank'>Rank {SingleCoindata.market_cap_rank}</div>
             <div id='currebtPriceofeach'>
              Current_ price: {symbol} {SeparateByComa(SingleCoindata.market_data.current_price[currency_value.toLowerCase()])}</div>
             <div id='marketcupofeach'>market cup:  {symbol} {SeparateByComa(SingleCoindata.market_data.market_cap[currency_value.toLowerCase()].toString().slice(0,-6))}M</div>
          </div>
        </section>
    
  

</div>
  )
}
