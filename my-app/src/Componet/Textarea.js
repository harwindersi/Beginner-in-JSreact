import React, { useState } from 'react'
function Textarea(props) {

   const[Text,setText] = useState("enter the text above box")
      const changed=(event)=>{
        setText(event.target.value)}
      const clicked=()=>{
        let newtext = Text.toLocaleUpperCase();
           setText(newtext);}
      
      const tolower=()=>{let lowertext = Text.toLocaleLowerCase()
           setText(lowertext); }

    return (
    <>
    <div>
     <h1>Bootsrap{props.Textarea}</h1>
      <div className="form-floating my-3">
  <textarea className="form-control" rows="9" id="mybox" onChange={changed} placeholder="Enter text"></textarea>
  <button className='btn btn-primary mx-1 my-2' onClick={clicked}>Uppercase</button>
  <button className='btn btn-primary mx-1 my-2' onClick={tolower}>lowercase</button>

     </div>
     </div>
    <div className="container">
   <h2>this is summary</h2>
   <p>{Text.split("").length} words and {Text.length} chracters </p>
   <p>{0.08*Text.split("").length} seconds , one average person take read above text. </p>
   <h2>preview</h2>
   <p>{Text}</p>
      </div>

    </>
  )
}

 export default Textarea ;
