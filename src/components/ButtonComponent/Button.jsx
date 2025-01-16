import React from 'react';
import styles from "./Button.module.scss";
import searchIcon from "../../assets/searchIcon.svg";

export const VariantButton = ({ variant, buttonText, cardVariant, disabled }) => {
	return (
		<button disabled={disabled} className={`${styles.defaultStyles} ${styles[variant]} ${styles[cardVariant]}`}>
			{variant === "icon" &&  <img src={searchIcon} alt="search icon" className={styles.searchIcon}/>}
			{buttonText}
		</button>
	);
};
