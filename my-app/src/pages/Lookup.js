import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyMap from "../components/MyMap"

function LookupForm() {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .get(
        // obtaining the lat and lon by using another api that pin points it on google maps
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=sk.eyJ1Ijoic2luZXVzdyIsImEiOiJja3JmNzFhMnMwczhkMnBsampyd3J3c3oxIn0.tFe_kPK6gdvki2VgtXDiAg`
      )
      .then(({ data }) => {
        setLatitude(data.features[0].center[1]);
        setLongitude(data.features[0].center[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  }
// returning everything in a physical form on the front end
  return (
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
  );
}

export default LookupForm;