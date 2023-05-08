import { useState } from "react"
export default function New_function(props){
let [text_note,change_text_note]=useState("")
let [word_remaining,setword_remaining]=useState(300)
function save_note(){
    props.newnote(text_note)
    change_text_note("")
    setword_remaining(300)
}
function changed (e){
    let {value}=e.target
    change_text_note(value)
    setword_remaining(300-value.length)
    if(word_remaining<2){
        change_text_note("")
        setword_remaining(300)
    }

}
    return (
   <div className="box new_note">
        <textarea rows="8" color="10"
        placeholder="Write New Note.."
        value={text_note}
        onChange={changed}
        />
        <div className="footer-note">
             <small>{word_remaining} remaining</small>
             <button onClick={save_note}>Save</button>
        </div>
   </div>
    )
}