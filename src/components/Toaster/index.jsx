import React from "react";
import Toast from "react-bootstrap/Toast";
import styles from "../../styles/main.module.scss";

const Toaster = props => {
  const { toggleToast, setToggleToast } = props;

  return (
    <div className={styles["toast-div"]}>
      <Toast
        className={styles["toast"]}
        show={toggleToast}
        onClose={() => setToggleToast(false)}
        delay={5000}
        autohide
      >
        <Toast.Body className={styles["toast-message"]}>
          Job has been created succesfully
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Toaster;
