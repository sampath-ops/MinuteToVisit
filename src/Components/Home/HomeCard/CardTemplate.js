/*eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faClapperboard,faCartShopping,faTree,faHotel,faSearch,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";
const CardTemplate = () => {
    return ( 
        <div className={styles.card_container}>
            <img src="https://source.unsplash.com/user/erondu/600x400" alt="" />
            <div className={styles.card_content}>
                <p className={styles.city_type}>Salem <FontAwesomeIcon icon={faUtensils}/></p>
                <h2>Cook With Comali</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit.</p>
                <Link to="/"><button className={styles.know_more}>Know more <FontAwesomeIcon icon={faArrowRight}/></button></Link>
            </div>
        </div>
     );
}
 
export default CardTemplate;