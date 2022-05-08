/*eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faClapperboard,faCartShopping,faTree,faHotel,faSearch,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";
const CardTemplate = ({arr}) => {
    return ( 
        arr.map((item,index)=>(
            <Link to={`/restaurant/${item.slug}`} state={item} key={index}>
                <div className={styles.card_container}>
                    <img src={item.images[0]} alt="temp" />
                    <div className={styles.card_content}>
                        <p className={styles.city_type}>Salem <FontAwesomeIcon icon={faUtensils}/></p>
                        <h2>{item.name}</h2>
                        <p className='content_short'>{item.short}</p>
                        <Link to="/"><button className={styles.know_more}>Know more <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                    </div>
                </div>
            </Link>
           
        ))
     );
}
 
export default CardTemplate;