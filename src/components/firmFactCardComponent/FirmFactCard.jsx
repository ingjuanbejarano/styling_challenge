import React from 'react';
import { VariantButton } from '../ButtonComponent/Button';
import styles from "./FirmFactCard.module.scss";

const FirmFactCard = ({ text, variant = "default", buttonText, buttonVariant = "icon", disabled = false }) => {
	return (
		<div className={`${styles.defaultStyles} ${styles[variant]}`}>
			<VariantButton variant={buttonVariant} buttonText={buttonText} cardVariant={variant} disabled={disabled} />
			<span>{text}</span>
		</div>
	);
};

export default FirmFactCard;
