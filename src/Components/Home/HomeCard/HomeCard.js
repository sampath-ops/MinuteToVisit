import CardTemplate from "./CardTemplate";
import styles from "./Card.module.css";
const HomeCard = ({arr}) => {
    return ( 
        <div className={styles.home_cards_layout}>
            <CardTemplate arr={arr}/>
        </div>
     );
}
 
export default HomeCard;