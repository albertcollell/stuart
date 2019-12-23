import styles from "../../styles/main.module.scss";
import React from "react";

const View = props => {
  const {
    handleChange,
    changeMarkerPickUp,
    changeMarkerDropOff,
    enableButton,
    activateButton,
    handleSubmit,
    trip
  } = props;

  return (
    <div className={styles["card"]}>
      <div className={styles["row"]}>
        <div className={styles["column-1"]}>
          <img src={changeMarkerPickUp} alt="pickup-icon" />
        </div>
        <div className={styles["column-2"]}>
          <input
            className={styles["input-adress"]}
            type="text"
            value={trip.pickup.address}
            placeholder="Pick Up Adress"
            name="pickup"
            onChange={handleChange}
          />
          {console.log(trip.pickup.address)}
        </div>
      </div>
      <div className={styles["row"]}>
        <div className={styles["column-1"]}>
          <img src={changeMarkerDropOff} alt="dropoff-icon" />
        </div>
        <div className={styles["column-2"]}>
          <input
            className={styles["input-adress"]}
            type="text"
            value={trip.dropoff.address}
            placeholder="Drop Off Adress"
            name="dropoff"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles["row"]}>
        <div className={styles["column-1"]}></div>
        <div className={styles["column-2"]}>
          <button
            disabled={!enableButton}
            onClick={() => handleSubmit(trip)}
            className={styles[`${activateButton}`]}
          >
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
