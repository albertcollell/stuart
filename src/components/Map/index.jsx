import React from "react";
import GoogleMapReact from "google-map-react";
import PickUpMarker from "../../assets/pickUpMarker.svg";
import DropOffMarker from "../../assets/dropOffMarker.svg";

const Map = props => {
  const { trip } = props;
  const center = { lat: 48.86, lng: 2.321 };
  const zoom = 14;
  const addressArray = Object.keys(trip);

  return (
    <div style={{ height: "100vh", width: "100%", zIndex: "-1" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBYgjjFzA9gCol9DuKL_XWMxnarUEDY1Lc" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {addressArray.map(x => {
          return x === "pickup" ? (
            <div
              lat={trip.pickup.latitude}
              lng={trip.pickup.longitude}
              text={x}
            >
              <img src={PickUpMarker} alt="pickup-marker" />
            </div>
          ) : (
            <div
              lat={trip.dropoff.latitude}
              lng={trip.dropoff.longitude}
              text={x}
            >
              <img src={DropOffMarker} alt="dropoff-marker" />
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
