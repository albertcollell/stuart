import styles from "../../styles/main.module.scss";
import React, { useEffect } from "react";

const View = props => {
  const {
    handleChange,
    changeMarkerPickUp,
    changeMarkerDropOff,
    enableButton,
    activateButton,
    handleSubmit,
    address
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
            placeholder="Pick Up Adress"
            name="pickup"
            onChange={handleChange}
          />
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
            onClick={() => handleSubmit(address)}
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
