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
import SectionDescription from './Components/Restaurant/RestaurantDescription/SectionDescription';
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
      console.log(nearbySnap);
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
         <Route path="/restaurants" element={<Section sectionName="restaurants" title="Restaurants"/>}/>
         <Route path="/entertainments" element={<Section sectionName="entertainments" title="Entertainments"/>}/>
         <Route path="/shops" element={<Section sectionName="shops" title="Shops"/>}/>
         <Route path="/sites" element={<Section sectionName="sites" title="Sites"/>}/>
         <Route path="/stay" element={<Section sectionName="restaurants"/>}/>
        
         <Route path="/restaurants/:id" element={<SectionDescription collection="RestaurantReviews" nearbySnap={nearbySnap}/>}/>
         <Route path="/entertainments/:id" element={<SectionDescription collection="EntertainmentReviews" nearbySnap={nearbySnap}/>}/>
         <Route path="/shops/:id" element={<SectionDescription collection="ShopReivews" nearbySnap={nearbySnap}/>}/>
         <Route path="/sites/:id" element={<SectionDescription collection="SitesReviews" nearbySnap={nearbySnap}/>}/>
         <Route path="/stay/:id" element={<SectionDescription collection="EntertainmentReviews" nearbySnap={nearbySnap}/>}/>
  
         <Route path="/upload/restaurant" element={<UploadRestaurant/>}/>
       </Routes>
       <Footer/>
    </Router>
    </UserProvider>
  );
}

export default App;
