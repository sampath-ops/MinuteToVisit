import styles from "./home.module.css";
import HomeRestaurant from "./HomeRestaurant/HomeRestaurant";
import hero from "../../Images/hero.svg";
// import Import from "../../importData";
const Home = ({nearbySnap}) => {
    return (  
        <div className={styles.home}>
            <div className={styles.home_container}>
                <div className={styles.hero_content_container}>
                    <div className={styles.hero_content}>
                        <div className={styles.hero_title}>
                            <h2>Explore your city</h2>
                            <p>Find what you have in your city!</p>
                        </div>
                        <div className={styles.news_letter}>
                            <input type="email" placeholder="Enter your email id..."/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <img src={hero} alt="hero" />  
                </div>
            <HomeRestaurant nearbySnap={nearbySnap}/>
            {/* <Import/> */}
            </div>
           
        </div>
    );
}
 
export default Home;