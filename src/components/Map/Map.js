import {memo, useState, useEffect} from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px'
};


const MapContainer = (props) => {
    
    const {REACT_APP_GOOGLE_API} = process.env

    const [position, setPosition] =useState({
        lat: 39.11353086610253,
        lng: -77.54374506933923
    })

    useEffect(() => {
        if(props.lng && props.lat){
            setPosition({lat: props.lng, lng: props.lat})
        }
        
    },[setPosition, props])
    
   
    return (
        <LoadScript
        googleMapsApiKey={`${REACT_APP_GOOGLE_API}`}
        >
        <GoogleMap 
        mapContainerStyle={containerStyle}
        zoom={13}
        center={position}
        >
            <Marker position={position}/>
        </GoogleMap>
        </LoadScript>
    )
}


export default memo(MapContainer)

