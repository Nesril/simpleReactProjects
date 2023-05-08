import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'//with out this it displays nothing

export default function LineChart({userdata,dayon_button}) {
    console.log(userdata)
  return (

    <div id="linechart">
       <Line data={userdata} />
       <div className='buttons'>
          <div id="24" ><button onClick={()=>dayon_button(1)}>24 Hours</button></div>
          <div id="30"><button onClick={()=>dayon_button(41)}>30 Days</button></div>
          <div id="3"><button onClick={()=>dayon_button(0)}>3 Months</button></div>
          <div id="1year"><button onClick={()=>dayon_button(36)}>1year</button></div>
       </div>
    </div>
  )
}
