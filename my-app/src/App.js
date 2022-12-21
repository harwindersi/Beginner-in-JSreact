
import './App.css';
// import About from './Componet/About';
import Navbar from './Componet/Navbar';
import Textarea from './Componet/Textarea';
import React, { useState } from 'react';

function App() {
 const[mode,setMode]= useState("light")
const changemode =()=>{
  if(mode==="light"){
    setMode("dark")
      document.body.style.backgroundColor= "#030d2b";
      document.body.style.color="white";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor= "white";
         document.body.style.color="black";
    }
  
}
  return (
    <>
    <Navbar title="Home" about="info" link="about us" mode={mode} changemode={changemode}/>
    <div className="container my-3 ">
     {/* <About /> */}
     
     <Textarea Textarea="Textarea" mode={mode} textareaplaceholder="enter text above paragraph" />
     </div>
     
     
     </>
  );
}

export default App;
