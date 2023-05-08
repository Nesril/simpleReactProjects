import React,{useEffect,useRef, useState} from 'react'

export default function Samplescroll() {
    let myRef=useRef()
    let myRef2=useRef()
    let [isvissible,setisvissible]=useState()
    console.log("isvissible ",isvissible)
    useEffect(()=>{
       //console.log("ref", myRef.current)
       let observer=new IntersectionObserver(e=>{
         let element=e[0]
         setisvissible(element.isIntersecting)
       })
       observer.observe(myRef.current)

    },[])
    let [isvissible2,setisvissible2]=useState()
    console.log("isvissible 2 ",isvissible2)
    useEffect(()=>{
       //console.log("ref", myRef.current)
       let observer=new IntersectionObserver(e=>{
         let element=e[0]
         setisvissible2(element.isIntersecting)
       })
       observer.observe(myRef2.current)

    },[])
  return (
    <div>
       <div>
          <h1>first</h1>
          <p >
          Today we are gonna explore how to use the intersection observer API in React and see some useful examples, you can find the code in the following repository, let's begin.
          </p>
       </div>
       <div>
          <h1>second</h1>
          <p > 
          lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount. This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.          </p>
       </div>
       <div>
          <h1>third</h1>
          <p ref={myRef2} className="sample" id={isvissible2?"view":""}>
          Today we are gonna explore how to use the intersection observer API in React and see some useful examples, you can find the code in the following repository, let's begin.
          </p>
       </div>
       <div>
          <h1>four</h1>
          <p ref={myRef} className="sample" id={isvissible?"view":""}> 
          Today we are gonna explore how to use the intersection observer API in React and see some useful examples, you can find the code in the following repository, let's begin.
          </p>
       </div>
   
    </div>
  )
}
