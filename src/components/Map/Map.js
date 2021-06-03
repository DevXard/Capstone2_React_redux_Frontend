import {memo, useState, useCallback, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 39.11353086610253,
    lng: -77.54374506933923
  };
const MapContainer = (props) => {
    
    const {REACT_APP_GOOGLE_API} = process.env

    const [map, setMap] = useState(null)
    const [position, setPosition] =useState({
        lat: 39.11353086610253,
        lng: -77.54374506933923
    })

    useEffect(() => {
        setPosition({lat: props.lng, lng: props.lat})
    },[setPosition])
    
   
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

