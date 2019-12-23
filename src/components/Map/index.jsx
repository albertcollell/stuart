import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import View from "./view";
import PickUpMarker from "../../assets/pickUpMarker.svg";
import DropOffMarker from "../../assets/dropOffMarker.svg";

const Map = props => {
  const { address } = props;
  const center = { lat: 48.86, lng: 2.321 };
  const zoom = 14;
  const addressArray = Object.keys(address);

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
              lat={address.pickup.latitude}
              lng={address.pickup.longitude}
              text={x}
            >
              <img src={PickUpMarker} />
            </div>
          ) : (
            <div
              lat={address.dropoff.latitude}
              lng={address.dropoff.longitude}
              text={x}
            >
              <img src={DropOffMarker} />
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
