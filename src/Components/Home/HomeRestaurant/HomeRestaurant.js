import HomeCard from "../HomeCard/HomeCard";
import styles from "../home.module.css";
const HomeRestaurant = () => {

    const home_res = [
        {
            img:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Cook With Comali",
            slug:"cook-with-comali",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"Sakthi Hotel",
            slug:"sakthi-hotel",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=",
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
        {
            img:"https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            name:"RR Briyani",
            slug:"rr-briyani",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit."
        },
    ]


    return ( 
        <div className={styles.home_overview_container}>
            <h2 className={styles.card_layout_title}>Restaurants near you</h2>
            <HomeCard arr={home_res}/>
        </div>
     );
}
 
export default HomeRestaurant;