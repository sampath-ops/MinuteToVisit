import CardTemplate from "../Home/HomeCard/CardTemplate";
import styles from "./Restaurant.module.css";
const RestaurantCardTemplate = () => {

    const restaurants = [
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        },
        {
            images:["https://media.istockphoto.com/photos/retro-restaurant-with-tables-on-a-distance-due-to-covid19-epidemic-picture-id1316569920?b=1&k=20&m=1316569920&s=170667a&w=0&h=2WGcd2Q-SeiL1WZfl5SHZVkSXhFZVd86J_x6zX50or0=","https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
            name:"Saravana Bavan",
            slug:"saravana-bavan",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.",
            address:"#275 lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore!",
            type:"indoor",
            menucard:"https://media.istockphoto.com/photos/menu-card-mockup-on-a-plate-4x9-ratio-picture-id1272229217?b=1&k=20&m=1272229217&s=170667a&w=0&h=VtmHpCp46il9fbjeyxGJip8bMpAA4G_zozsPiksJMbM=",
            M2VRES:"366902"
        }
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