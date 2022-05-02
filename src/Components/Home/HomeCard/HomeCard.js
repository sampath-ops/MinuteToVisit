import CardTemplate from "./CardTemplate";
import styles from "./Card.module.css";
const HomeCard = () => {
    return ( 
        <div className={styles.home_card}>
            <CardTemplate/>
        </div>
     );
}
 
export default HomeCard;