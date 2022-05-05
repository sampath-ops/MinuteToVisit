import CardTemplate from "../Home/HomeCard/CardTemplate";
import styles from "./Restaurant.module.css";
const RestaurantCardTemplate = () => {

    const restaurants = [
        {
            img:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Cook With Comali",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Sakthi Hotel",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=",
            name:"Saravana Bhavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"RR Briyani",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Sri krishna",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Anandha Bhavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"A1 briyani",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Vasantham hotel",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Sakthi hotel",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Royal chef",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
    ]

    return ( 
        <div className={styles.restaurant_section_cards_container}>
            <div className={styles.restaurant_section}>
                <h2>Restaurants</h2>
                <div className={styles.restaurant_card_layout}>
                    <CardTemplate arr={restaurants}/>
                </div>
            </div>
        </div> 
     );
}
 
export default RestaurantCardTemplate;