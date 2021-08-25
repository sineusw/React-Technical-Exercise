import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyMap from "../components/MyMap"

function LookupForm() {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
//   const api = {
//     key: "72b63d4c4e119568962d73e61d8a4714",
//     base: "http://pro.openweathermap.org/data/2.5/forecast/hourly"
//   }
  

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


// const search = evt => {
//   if (evt.key === "Enter") {
//     fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
//     .then(res => res.json())
//     .then(result => {
//       setWeather(result);
//       setQuery('');
//       console.log(result);
//    });
//   }
// }


const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}




   function handleSubmit(e) {
    e.preventDefault();
    const req1 =  axios
      .get(
        // obtaining the lat and lon by using another api that pin points it on google maps
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=sk.eyJ1Ijoic2luZXVzdyIsImEiOiJja3JmNzFhMnMwczhkMnBsampyd3J3c3oxIn0.tFe_kPK6gdvki2VgtXDiAg`
      )

    //   https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${api.key}

      const req2 = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dakar&units=metric&appid=72b63d4c4e119568962d73e61d8a4714`); 
        Promise.all([req1, req2]).then(values => {
          const [coord, weatherData] = values;
          setWeather(weatherData.data) 
          
         setLatitude(coord.data.features[0].center[1]);
        setLongitude(coord.data.features[0].center[0]);
        })
      // .then(({ data }) => {
      //   setLatitude(data.features[0].center[1]);
      //   setLongitude(data.features[0].center[0]);
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
  }
// returning everything in a physical form on the front end
console.log(weather)
  return (
    <>
    {/* <main> */}
    <section className="lookup-form">
    
      <form onSubmit={handleSubmit}>
        <h3>Check Weather</h3>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {latitude && longitude && <MyMap latitude={latitude} longitude={longitude} />}



    </section>
    {weather.main &&
        <>
            <div className="location-box">
            <div className="location"> {location} </div>
            <div className="date"> {dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}°C</div>
                <div className="weather">{weather.weather[0].description}</div>
                
          </div>
          </>

    }
</>
 
  );
}

export default LookupForm;