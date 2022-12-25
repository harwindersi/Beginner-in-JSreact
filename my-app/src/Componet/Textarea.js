import React, { useState } from 'react'
function Textarea(props) {

   const[Text,setText] = useState("")
      const changed=(event)=>{
        setText(event.target.value)}
        
      const clicked=()=>{
          
        let newtext = Text.toLocaleUpperCase();
           setText(newtext);}
      
      const tolower=()=>{let lowertext = Text.toLocaleLowerCase()
           setText(lowertext); }
           
           const toclear=()=>{
            let cleartext=("")
            setText(cleartext)
           }

    return (
    <>
    <div style={{Color:props.mode==="dark"?"white":"dark"}}>
     <h1>Bootsrap{props.Textarea}</h1>
      <div className={`form-floating my-3 bg-${props.mode==="dark"?"gray":"light"}`}>
  <textarea style={{backgroundColor:props.mode==="dark"?"grey":"white"}} className={`form-control text-${props.mode==="dark"?"white":"dark"}`} id="mybox" rows="8" coloumns="5" onChange={changed} value={Text}>{props.Textareaplaceholder}</textarea>
  <button className='btn btn-primary mx-1 my-2' onClick={clicked}>Uppercase</button>
  <button className='btn btn-primary mx-1 my-2' onClick={tolower}>lowercase</button>
  <button className='btn btn-primary mx-1 my-2' onClick={toclear}>clear</button>

     </div>
     </div>
    <div className="container">
   <h2>this is summary</h2>
   <p>{Text.split(" ").length-1} words and {Text.length} chracters </p>
   <p>{0.08*Text.split(" ").length} seconds , one average person take read above text. </p>
   
   <h2>preview</h2>
   <p>{Text.length>0?Text:"enter the text above box"}</p>
      </div>

    </>
  )
}

 export default Textarea ;
