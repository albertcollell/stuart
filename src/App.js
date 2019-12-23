import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import Card from "./components/Card";
import Toaster from "./components/Toaster";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [address, setAddress] = useState({
    pickup: { address: "", latitude: "", longitude: "" },
    dropoff: { address: "", latitude: "", longitude: "" }
  });

  const [toggleToast, setToggleToast] = useState(false);

  const handleChange = event => {
    const value = { address: event.target.value };
    const name = event.target.name;
    callApiGeolocate(value, name);
  };

  const callApiGeolocate = (address, key) => {
    axios
      .post("https://stuart-frontend-challenge.now.sh/geocode", address)
      .then(res => {
        const response = res.data;
        setAddress(prevState => ({
          ...prevState,
          [key]: {
            address: response.address,
            latitude: response.latitude,
            longitude: response.longitude,
            isLoading: false
          }
        }));
      })
      .catch(error => {
        setAddress(prevState => ({
          ...prevState,
          [key]: {
            address: null,
            latitude: null,
            longitude: null,
            isLoading: false
          }
        }));
      });
  };

  return (
    <div>
      <Card
        handleChange={handleChange}
        address={address}
        setAddress={setAddress}
        setToggleToast={setToggleToast}
      />
      <Toaster toggleToast={toggleToast} setToggleToast={setToggleToast} />
      <Map address={address} />
    </div>
  );
};

export default App;
