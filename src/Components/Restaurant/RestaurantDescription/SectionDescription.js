/* eslint-disable */
import styles from "./RestaurantDescription.module.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import { useRef,useEffect, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geohash from "ngeohash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faBowlFood } from "@fortawesome/free-solid-svg-icons";
import PopularDishes from "./PopularDishes";
import HomeNear from "../../Home/HomeNear/HomeNear";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
const RestaurantDescription = ({nearbySnap,collection}) => {
    
    const [reviewsObj,setReviews] = useState();

    // mapbox literals
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtcGF0aDA0IiwiYSI6ImNrcTNkNjJsejA0NjMycW50cWlkd29laTMifQ.b1-zGv3daR0_GT3zEyOqjg';
    const location = useLocation();
    const data = location.state;
    const latlon = geohash.decode(data.geohash);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng  = latlon.longitude;
    const lat = latlon.latitude;
    const zoom = 15;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
        // add marker
        const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el).setLngLat([latlon.longitude,latlon.latitude]).setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                `<h3>${data.name}</h3><p>${data.address}</p>`
                )
            )
            .addTo(map.current);

        // get reviews
        async function getReviews(){
            const docRef = doc(db, collection, data.reviews);
            const docSnap = await getDoc(docRef)
            setReviews(docSnap.data());
        }

        getReviews();

    },[]);

    console.log(reviewsObj)

    return ( 
        <div className={styles.restaurant_description_container}>
            <div className={styles.restaurant_hero}>
                <Carousel className={styles.carousle} showArrows={true} autoPlay={false} showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true}>
                    {
                    data.images.map((img,index)=>(
                            <div key={index}>
                                <img src={img} alt="" />
                            </div>
                    ))
                    }
                </Carousel>
                <div className={styles.side_bar}>
                    <h2>{data.name}</h2>
                    <p>{data.address}</p>
                    <div ref={mapContainer} className="map-container" />
                </div>
            </div>

           <div className={styles.have_food}>
               <h2>Links</h2>
               <div className={styles.res_links}> 
                   <div className={styles.open_in_google}>
                    <a href={data.mapLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMap}/></a>
                        <span>google</span>
                   </div>
                   {
                    data.order && <div className={styles.order_now}>
                        <a href={data.order} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBowlFood}/></a>
                        <span>Order</span>
                    </div>
                    }
               </div>
                
           </div>

           {data.popular && <PopularDishes data={data}/>}

           {/* {
                data.menucard.length > 0 && <div className={styles.menucard_container}>
                <h2>Menu Card</h2>
                <div className={styles.menu_card}>
                     <img src={data.menucard} alt="" />
                </div>
                </div>
            } */}

              {/* reviews */}
             <>
             <h2>Reviews</h2>
             <div className={styles.reviews_container}>
               {
                reviewsObj && reviewsObj.reviews.map((review,index)=>(
                    <div className={styles.review} key={index}>
                    <p>&ldquo; {review}  &rdquo;</p>
                    </div>
                   ))
               }   
              </div>
             </>

            {
                nearbySnap && 
                <>
                <HomeNear nearbySnap={nearbySnap} section={nearbySnap.restaurant} title="Sites"/>
                <HomeNear nearbySnap={nearbySnap} section={nearbySnap.restaurant} title="Entertainment"/>
                <HomeNear nearbySnap={nearbySnap} section={nearbySnap.restaurant} title="Shops"/> 
                <HomeNear nearbySnap={nearbySnap} section={nearbySnap.restaurant} title="Stay"/>
                </>
            }  
        </div>
     );
}
 
export default RestaurantDescription;