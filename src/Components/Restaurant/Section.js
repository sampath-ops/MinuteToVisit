/*eslint-disable*/
import SectionCardTemplate from "./SectionCardTemplate";
import { db } from "../../firebase.config";
import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
const Restaurant = ({sectionName,title}) => {
    const [restaurants,setRestaurantsSnap] = useState();
    useEffect(()=>{
        async function getRestaurants(){
            setRestaurantsSnap(await getDocs(collection(db,sectionName)));
        }
        getRestaurants();
    },[sectionName])
    return ( 
        <Navbar>
        <div className="restaurant">
            {restaurants && <SectionCardTemplate title={title} restaurants={restaurants}/>}
        </div>
        </Navbar>
     );
}
 
export default Restaurant;