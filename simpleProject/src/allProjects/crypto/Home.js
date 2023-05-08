import React from 'react'
import Banner from './banner'
import CryptoTable from './CryptoTable'
export default function Home({currency_value}) {
 

return (
    <section className='Home'>
         <div id='image'>
            <h1 id="image_text_big">Crypto Chaser</h1>  
            <div id="image_text_small">Get All Information Reagarding Your Favorite Crypto Currency</div>
            <div id="baner"><Banner currency_value={currency_value}/></div>
         </div>
       <CryptoTable currency_value={currency_value}/>
    </section>
  )
}
