import {memo, useState, useEffect} from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px'
};


const MapContainer = (props) => {
    
    const {REACT_APP_GOOGLE_API} = process.env

    const [position, setPosition] =useState({
        lat: 39.0379233,
        lng: -77.47559618009544
    })

    useEffect(() => {
        if(props.lng && props.lat){
            setPosition({lat: props.lng, lng: props.lat})
        }
        
    },[setPosition, props])
    
   
    return (
        <LoadScript
        googleMapsApiKey={`AIzaSyDBf8Y0r_933bowpXFNCo3dpjnnQSEmtuM`}
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

