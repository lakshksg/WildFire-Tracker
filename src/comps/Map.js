import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
function Map({eventData,center, zoom}){
    const [locationInfo, setLocationinfo] = useState(null);
    const markers = eventData.map( ev =>{
        if(ev.categories[0].id === 8){
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            onClick={()=>setLocationinfo({id: ev.id, title:ev.title})}/>
        }
        return null;
    })
    return(
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys ={{key:"AIzaSyDQQ0JfBFuxozrGxEeRIM8CH_45nd2ZgGw"}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
            {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )

}

Map.defaultProps = {
    center: {
        lat: 36.778261,
        lng: -119.417932
    },
    zoom:6
}

export default Map;