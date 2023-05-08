import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function FundUs({allowtofind}) {
  return (
    <div className='findus'>
        <div><HighlightOffIcon id="remove_find" onClick={()=>allowtofind(false)}/></div>
        <div id="headeroffind">We Are Here</div>
        <section id='findushere'>
             <div id="iconsfind">
               <div id="eachiconfind">
                  <div><EmailIcon/></div>
                  <div><a href='mailto:abdurezakkumbu27@gmail.com'>Abdu Electro</a></div>
                </div>
                <div id="eachiconfind">
                <div><InstagramIcon style={{color:"red"}}/></div>
                  <div><a href='instagram.com'>Abdu Electro</a></div>
                </div>
                <div id="eachiconfind">
                <div><TelegramIcon  style={{color:"blueviolet"}}/></div>
                  <div><a href='instagram.com'>Abdu Electro</a></div>
                </div>
                <div id="eachiconfind">   
                  <div><LinkedInIcon  style={{color:"aqua"}}/></div>
                  <div><a href='linkedin.com'>Abdu Electro</a></div>
                </div>
                <div id="eachiconfind">   
                   <div><FacebookIcon style={{color:"blue"}}/></div>
                   <div><a href='facebookedin.com'>Abdu Electro</a></div>
                </div>
        </div>
        </section>

    </div>
  )
}
 