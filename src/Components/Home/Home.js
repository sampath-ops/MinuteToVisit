import styles from "./home.module.css";
import HomeCard from "./HomeCard/HomeCard";
const Home = () => {
    return (  
        <div className={styles.home}>
            <div className={styles.home_container}>
                <div className={styles.hero_content}>
                    <h2>Explore your city</h2>
                    <p>Find what you have in your city!</p>
                    <HomeCard/>
            </div>
            </div>
           
        </div>
    );
}
 
export default Home;