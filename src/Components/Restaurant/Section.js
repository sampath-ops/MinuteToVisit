/*eslint-disable*/
import SectionCardTemplate from "./SectionCardTemplate";
import { db } from "../../firebase.config";
import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
const Restaurant = ({sectionName}) => {
    const [restaurants,setRestaurantsSnap] = useState();
    useEffect(()=>{
        async function getRestaurants(){
            setRestaurantsSnap(await getDocs(collection(db,sectionName)));
        }
        getRestaurants();
    },[])
    return ( 
        <div className="restaurant">
            {restaurants && <SectionCardTemplate restaurants={restaurants}/>}
        </div>
     );
}
 
export default Restaurant;