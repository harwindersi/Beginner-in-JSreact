
import './App.css';
import About from './Componet/About';
import Navbar from './Componet/Navbar';
// import Textarea from './Componet/Textarea';

function App() {
  return (
    <>
    <Navbar title="Home" about="info" link="about us"/>
    <div className="container my-3 7px solid red">
     {/* <Textarea Textarea="Textarea" /> */}
     <About />
     
     </div>
     
     
     </>
  );
}

export default App;
