import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Restaurant from './Components/Restaurant/Restaurant';
import Entertainment from './Components/Entertainment/Entertainment';
import Shop from './Components/Shop/Shop';
import Sites from './Components/Sites/Sites';
import Stay from './Components/Stay/Stay';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/restaurant" element={<Restaurant/>}/>
         <Route path="/restaurant/:id" element={<Restaurant/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/sites" element={<Sites/>}/>
         <Route path="/stay" element={<Stay/>}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
