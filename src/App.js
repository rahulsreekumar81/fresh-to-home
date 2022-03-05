
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Banner from './Componets/Banner/Banner';
import Sales from './Componets/Sales/Sales';
import ProductView from './Componets/ProductView';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      
      <br/>
  
      
      <Router>
        <Routes>
          <Route path="/" element={<div><Banner/><Sales/></div>}/>
          <Route path="/ProductView" element={<ProductView/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
