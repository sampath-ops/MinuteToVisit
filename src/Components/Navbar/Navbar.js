import styles from "./navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faClapperboard,faCartShopping,faTree,faHotel,faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
const Navbar = () => {
    return ( 
        <div className={styles.navbar_container}>
            <div className={styles.navbar}>
                <Logo/>
                <div className={styles.nav_menus}>
                    <ul>
                        <NavLink to="/restaurant"><li><FontAwesomeIcon icon={faUtensils} />Restaurant</li></NavLink>
                        <NavLink to="/entertainment"><li><FontAwesomeIcon icon={faClapperboard} />Entertainment</li></NavLink>
                        <NavLink to="/shop"><li><FontAwesomeIcon icon={faCartShopping} />Shop</li></NavLink>
                        <NavLink to="/sites"><li><FontAwesomeIcon icon={faTree} />Sites</li></NavLink>
                        <NavLink to="/stay"><li><FontAwesomeIcon icon={faHotel} />Stay</li></NavLink>  
                    </ul>
                </div>
                <div className={styles.searchbar}>
                    <input type="text" placeholder="Search cities..." />
                <button> <FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <div className={styles.login_button}>
                    <button>Login</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;