import CardTemplate from "../Home/HomeCard/CardTemplate";
import styles from "./Restaurant.module.css";
const RestaurantCardTemplate = ({restaurants}) => {

    const restaurantsArr = [];
    restaurants.forEach((doc) => {
        restaurantsArr.push(doc.data())
      });

    return ( 
        <div className={styles.restaurant_section_cards_container}>
            <div className={styles.restaurant_section}>
                <h2>Restaurants</h2>
                <div className={styles.restaurant_card_layout}>
                    <CardTemplate arr={restaurantsArr}/>
                </div>
            </div>
        </div> 
     );
}
 
export default RestaurantCardTemplate;