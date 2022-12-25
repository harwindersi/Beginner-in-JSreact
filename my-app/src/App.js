
import './App.css';
// import About from './Componet/About';
import Navbar from './Componet/Navbar';
import Textarea from './Componet/Textarea';
import React, { useState } from 'react';
import Alert from './Componet/Alert';

function App() {
 const[mode,setMode]= useState("light")
const[alert,setAlert]= useState(null)

 const showalert=(masseage,type)=>{
       setAlert({
          msg:masseage,
          type:type,
       })
        setTimeout(()=>{
          setAlert(null)
        },2000);
      }
 const changemode =()=>{
  if(mode==="light"){
    setMode("dark")
      document.body.style.backgroundColor= "#030d2b";
      document.body.style.color="white";
      showalert("this is dark mode","danger")
      document.title="dark mode"
      
      // setInterval(()=>{
      //   document.title=" install npm server "
        
      //  },2000)

      }
      else{
        setMode("light")
        document.body.style.backgroundColor= "white";
        document.body.style.color="black";
        showalert("this is light mode","primary")
        document.title="light mode";
        // setInterval(() => {
        //      document.title="light mode";
            
        //    },3000);
    }
  
}
  return (
    <>
    <Navbar title="Home" about="info" link="about us" mode={mode} changemode={changemode}/>
    <Alert alert={alert} />
    <div className="container my-3 ">
     {/* <About /> */}
     
     <Textarea Textarea="Textarea" mode={mode} alert={alert} textareaplaceholder="enter text above paragraph" />
     </div>
     
     
     </>
  );
}

export default App;
