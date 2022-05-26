import styles from "./navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils,faClapperboard,faCartShopping,faTree} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { signInWithGoogle,SignOut } from "../signin";
import { useScrollHandler } from "./useScrollHandler";
import { UserContext } from "../Provider/UserProvider";
import { useContext } from "react";
const Navbar = () => {
    const user = useContext(UserContext);
    const scroll = useScrollHandler();
    return ( 
        <div className={styles.navbar_container + ` ${scroll ? styles.navonscroll : ""}`}>
            <div className={styles.navbar}>
                <Logo/>
                <div className={styles.nav_menus}>
                    <ul>
                        <NavLink to="/restaurants"><li><FontAwesomeIcon icon={faUtensils} />Restaurant</li></NavLink>
                        <NavLink to="/entertainments"><li><FontAwesomeIcon icon={faClapperboard} />Entertainment</li></NavLink>
                        <NavLink to="/shops"><li><FontAwesomeIcon icon={faCartShopping} />Shop</li></NavLink>
                        <NavLink to="/sites"><li><FontAwesomeIcon icon={faTree} />Sites</li></NavLink>
                        {/* <NavLink to="/stay"><li><FontAwesomeIcon icon={faHotel} />Stay</li></NavLink>   */}
                    </ul>
                </div>
                <SearchBar/>
                {
                    user ?<div className={styles.login_button}>
                    <button onClick={SignOut}>Logout</button>
                    </div> : <div className={styles.login_button}>
                    <button onClick={signInWithGoogle}>Login</button>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Navbar;