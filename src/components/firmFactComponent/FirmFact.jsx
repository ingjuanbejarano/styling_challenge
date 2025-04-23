import React from "react";
import styles from "./FirmFact.module.scss";
import FirmFactCard from "../firmFactCardComponent/FirmFactCard";
import closeIcon from "../../assets/closeIcon.svg";

const FirmFact = () => {
  return (
    <div>
      <div className={styles.TitleContainer}>
        <h1>Firm Facts test CI/CD 2</h1>
        <img src={closeIcon} alt="close icon" />
      </div>
      <div className={styles.cardsContainer}>
        <FirmFactCard buttonText="This is a two line button that terminates with This is a two line button that terminates with" />
        <FirmFactCard buttonText="This is a two line button that terminates with" />
        <FirmFactCard
          buttonText="This is a one line button This is a one line button This is a one line button"
          buttonVariant="default"
        />
        <FirmFactCard buttonText="This is a two line button that terminates with" />
        <FirmFactCard
          buttonText="This is a two line button that terminates with"
          text={"initial"}
          variant="border"
        />
        <FirmFactCard
          buttonText="This is a two line button that terminates with"
          text={"disabled"}
          variant="border"
          disabled
        />
        <FirmFactCard
          buttonText="This is a two line button that terminates with"
          text={"hover"}
          variant="border"
        />
      </div>
    </div>
  );
};

export default FirmFact;
