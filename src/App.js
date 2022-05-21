import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import GeoLocation from './Components/GeoLocation';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Restaurant from './Components/Restaurant/Restaurant';
import Entertainment from './Components/Entertainment/Entertainment';
import Shop from './Components/Shop/Shop';
import Sites from './Components/Sites/Sites';
import Stay from './Components/Stay/Stay';
import Footer from './Components/Footer/Footer';
import UserProvider from './Components/Provider/UserProvider';
import RestaurantDescription from './Components/Restaurant/RestaurantDescription/RestaurantDescription';
import { useState } from 'react';
import UploadRestaurant from './Components/Upload/Restaurant';
function App() {

  const [nearbySnap,setNearBySnap] = useState({});

  const nearByDocuments = (snap)=>{
    return setNearBySnap(prevState =>({
        ...prevState.nearbySnap,
        ...snap
    }))
  }
 
  if(Object.keys(nearbySnap).length > 0){
      nearbySnap.restaurant.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });
  }
  

  return (
    <UserProvider>
    <Router>
      <Navbar/>
      <GeoLocation nearByDocumentsHandler={nearByDocuments}/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/restaurant" element={<Restaurant/>}/>
         <Route path="/restaurant/:id" element={<RestaurantDescription/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
         <Route path="/shop" element={<Shop/>}/>
         <Route path="/sites" element={<Sites/>}/>
         <Route path="/stay" element={<Stay/>}/>
         <Route path="/upload/restaurant" element={<UploadRestaurant/>}/>
       </Routes>
       <Footer/>
    </Router>
    </UserProvider>
  );
}

export default App;
