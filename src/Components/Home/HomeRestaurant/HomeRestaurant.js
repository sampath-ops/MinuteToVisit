import HomeCard from "../HomeCard/HomeCard";
import styles from "../home.module.css";
const HomeRestaurant = ({nearbySnap}) => {

    // const home_res = [
    //     {
    //         images:["https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
    //         name:"Cook With Comali",
    //         slug:"cook-with-comali",
    //         short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
    //         address:"#223 Cherry Road Near Eswaran Temple,Opp petrol pump, Tamil Nadu 636001",
    //         type:"outdoor",
    //         menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
    //         M2VRES:"946530"
    //     },
    //     {
    //         images:["https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
    //         name:"Sakthi Hotel",
    //         slug:"sakthi-hotel",
    //         short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
    //         address:"#223 Cherry Road Near Eswaran Temple,Opp petrol pump, Tamil Nadu 636001",
    //         type:"indoor",
    //         menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
    //         M2VRES:"260082"
    //     },
    //     {
    //         images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
    //         name:"Saravana Bavan",
    //         slug:"saravana-bavan",
    //         short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
    //         address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
    //         type:"indoor",
    //         menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
    //         M2VRES:"366902"
    //     },
    //     {
    //         images:["https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
    //         name:"RR Briyani",
    //         slug:"rr-briyani",
    //         short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
    //         address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
    //         type:"indoor",
    //         menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
    //         M2VRES:"070130"
    //     },
    // ]

    const home_res = [];

    if(Object.keys(nearbySnap).length > 0){
        nearbySnap.restaurant.forEach((doc) => {
        home_res.push(doc.data())
      });
    }

    return ( 
        <div className={styles.home_overview_container}>
            <h2 className={styles.card_layout_title}>Restaurants near you</h2>
            <HomeCard arr={home_res} />
        </div>
     );
}
 
export default HomeRestaurant;