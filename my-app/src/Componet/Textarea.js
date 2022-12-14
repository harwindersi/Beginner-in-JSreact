import React, { useState } from 'react'
function Textarea(props) {

    const[text,setText] = useState("enter the text")
      const changed=(event)=>{
        setText(event.target.value)
      }
      const clicked=()=>{
        let newtext = text.toLocaleUpperCase();
           setText(newtext);
      }
    return (
    <div>
     <h1>Bootsrap{props.Textarea}</h1>
      <div className="form-floating my-3">
  <textarea className="form-control" rows="9" id="mybox" onChange={changed} value={text}></textarea>
  <button className='btn btn-primary' onClick={clicked}>Uppercase</button>

</div>
    </div>
  )
}

export default Textarea
