
import './App.css';
import Navbar from './Componet/Navbar';
import Textarea from './Componet/Textarea';

function App() {
  return (
    <>
    <Navbar title="Home" about="info" link="referance"/>
    <div className="container">
     <Textarea Textarea="Textarea"  rows="9"/></div>
     
     
     </>
  );
}

export default App;
