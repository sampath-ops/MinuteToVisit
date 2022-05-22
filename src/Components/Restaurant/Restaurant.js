import RestaurantCardTemplate from "./RestaurantCardTemplate";
import { db } from "../../firebase.config";
import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
const Restaurant = () => {
    const [restaurants,setRestaurantsSnap] = useState();
    useEffect(()=>{
        async function getRestaurants(){
            setRestaurantsSnap(await getDocs(collection(db,"restaurants")));
        }
        getRestaurants();
    },[])
    return ( 
        <div className="restaurant">
            {restaurants && <RestaurantCardTemplate restaurants={restaurants}/>}
        </div>
     );
}
 
export default Restaurant;