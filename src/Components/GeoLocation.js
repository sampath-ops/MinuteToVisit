/* eslint-disable */
import React, { Component, useEffect } from "react";
import {db} from '../firebase.config';
import geohash from "ngeohash";
import { collection, query, where, getDocs } from "firebase/firestore";

// Calculate the upper and lower boundary geohashes for
// a given latitude, longitude, and distance in miles
const getGeohashRange = (
  latitude,
  longitude,
  distance, // miles
) => {
  const lat = 0.0144927536231884; // degrees latitude per mile
  const lon = 0.0181818181818182; // degrees longitude per mile

  const lowerLat = latitude - lat * distance;
  const lowerLon = longitude - lon * distance;

  const upperLat = latitude + lat * distance;
  const upperLon = longitude + lon * distance;

  const lower = geohash.encode(lowerLat, lowerLon);
  const upper = geohash.encode(upperLat, upperLon);

  return {
    lower,
    upper
  };
};

function getPosition(){
  return new Promise((res,rej)=>{
    navigator.geolocation.getCurrentPosition(res,rej);
  })
}

const GeoLocation = ({nearByDocumentsHandler})=> {

    useEffect(()=>{ 
        async function userPosition(){
          const position = await getPosition();
          var crd = position.coords;
          // console.log("Your current position is:"); 
          // console.log(`Latitude : ${crd.latitude}`); 
          // console.log(`Longitude: ${crd.longitude}`); 
          // console.log(`More or less ${crd.accuracy} meters.`); 
          const { latitude, longitude } = crd;
          const range = getGeohashRange(11.65583469134832, 78.15808460379398, 7.45645); // NEED TO USE USER LATLNG
          
          const q = query(collection(db, "restaurants"), where("geolocation", ">=", range.lower),
          where("geolocation", "<=", range.upper));
        
          const querySnapshot = await getDocs(q);
          nearByDocumentsHandler({restaurant:querySnapshot})
        }
        userPosition();
    },[])
    
    return (
      <>
      
      </>
    );
}
export default GeoLocation;