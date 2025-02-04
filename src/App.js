import {useState, useEffect} from 'react';
import Map from './comps/Map';
import Loader from './comps/Loader';
import Header from './comps/Header'

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const fetchEvents = async() =>{
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();

      setEventData(events);
      setLoading(false);
    }
    fetchEvents()
  }, [])
  return (
    <div >
    <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
