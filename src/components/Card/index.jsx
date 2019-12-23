import React from "react";
import View from "./view";
import PickUpBlank from "../../assets/pickUpBadgeBlank.svg";
import PickUpError from "../../assets/pickUpBadgeError.svg";
import PickUpPresent from "../../assets/pickUpBadgePresent.svg";
import DropOffBlank from "../../assets/dropOffBadgeBlank.svg";
import DropOffError from "../../assets/dropOffBadgeError.svg";
import DropOffPresent from "../../assets/dropOffBadgePresent.svg";
import axios from "axios";

const Card = props => {
  const { handleChange, address, setAddress, setToggleToast } = props;

  const changeMarkerPickUp = icon => {
    return icon.longitude === null
      ? PickUpError
      : icon.longitude
      ? PickUpPresent
      : PickUpBlank;
  };
  const changeMarkerDropOff = icon => {
    return icon.longitude === null
      ? DropOffError
      : icon.longitude
      ? DropOffPresent
      : DropOffBlank;
  };

  const enableButton =
    address.pickup.longitude !== null &&
    address.dropoff.longitude !== null &&
    (address.pickup.longitude !== "" && address.dropoff.longitude !== "");

  const activateButton = style => {
    return style ? "button-card" : "button-card-oppacity";
  };

  const handleSubmit = submit => {
    const submitAdress = {
      pickup: submit.pickup.address,
      dropoff: submit.dropoff.address
    };
    axios
      .post("https://stuart-frontend-challenge.now.sh/jobs", submitAdress)
      .then(res => {
        console.log(res);
        setAddress({
          pickup: { address: "", latitude: "", longitude: "" },
          dropoff: { address: "", latitude: "", longitude: "" }
        });
        setToggleToast(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <View
      handleChange={handleChange}
      address={address}
      changeMarkerPickUp={changeMarkerPickUp(address.pickup)}
      changeMarkerDropOff={changeMarkerDropOff(address.dropoff)}
      enableButton={enableButton}
      activateButton={activateButton(enableButton)}
      handleSubmit={handleSubmit}
    />
  );
};

export default Card;
