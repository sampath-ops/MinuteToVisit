import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import GeoLocation from './Components/GeoLocation';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Section from './Components/Restaurant/Section';
// import Entertainment from './Components/Entertainment/Entertainment';
// import Shop from './Components/Shop/Shop';
// import Sites from './Components/Sites/Sites';
// import Stay from './Components/Stay/Stay';
import Footer from './Components/Footer/Footer';
import UserProvider from './Components/Provider/UserProvider';
import RestaurantDescription from './Components/Restaurant/RestaurantDescription/RestaurantDescription';
import { useState } from 'react';
import UploadRestaurant from './Components/Upload/Restaurant';
import ScrollToTop from './Components/ScrollToTop';
function App() {

  const [nearbySnap,setNearBySnap] = useState({});

  const nearByDocuments = (snap)=>{
    return setNearBySnap(prevState =>({
        ...prevState,
        ...snap
    }))
  }
 
  if(Object.keys(nearbySnap).length > 0){
      nearbySnap.restaurant.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
    });
  }
  

  return (
    <UserProvider>
    <Router>
      <Navbar/>
      <GeoLocation nearByDocumentsHandler={nearByDocuments}/>
      <ScrollToTop />
       <Routes>
         <Route exact path="/" element={<Home nearbySnap={nearbySnap}/>}/>
         <Route path="/restaurant" element={<Section sectionName="restaurants"/>}/>
         <Route path="/restaurant/:id" element={<RestaurantDescription nearbySnap={nearbySnap}/>}/>
         <Route path="/entertainment" element={<Section sectionName="restaurants"/>}/>
         <Route path="/shop" element={<Section sectionName="restaurants"/>}/>
         <Route path="/sites" element={<Section sectionName="restaurants"/>}/>
         <Route path="/stay" element={<Section sectionName="restaurants"/>}/>
         <Route path="/upload/restaurant" element={<UploadRestaurant/>}/>
       </Routes>
       <Footer/>
    </Router>
    </UserProvider>
  );
}

export default App;
