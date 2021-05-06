import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapTable = (props) => {
  console.log(props.store);
  const mapStyles = {
    width: "700px",
    height: "400px",
  };
  return (
    <div className="map-cont">
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 6.5244, lng: 3.3792 }}>
        {props.store?.map((item, i) => (
          <Marker key={i} position={{ lat: item?.lat, lng: item?.lng }} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyApwLJxTCiJluSrHsPv24WrI4hM9fCGuFY",
})(MapTable);
