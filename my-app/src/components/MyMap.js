import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import {useEffect, useState} from 'react'

const MyMapComponent = withScriptjs(withGoogleMap(({latitude, longitude, isMarkerShown}) => {
  const [coordinates, setCoordinates] = useState({latitude, longitude})
useEffect(()=>{
    setCoordinates(previous => ({...previous, latitude, longitude}))
    console.log('latitude changed', latitude, longitude)
}, [latitude, longitude])

return(
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: coordinates.latitude, lng: coordinates.longitude }}
  >
    
    {isMarkerShown && <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} />}
  </GoogleMap>
)

}));



function MyMap({latitude, longitude}) {
  return (
   
<MyMapComponent
  isMarkerShown={true}
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4BMtAMzYHk9BfyXRFptKXyZihwvDaGoE"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
  latitude={latitude}
  longitude={longitude}
/>    
  );
}


export default MyMap;
