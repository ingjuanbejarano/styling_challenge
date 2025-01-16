import React from 'react';
import styles from "./FirmFact.module.scss"
import FirmFactCard from '../firmFactCardComponent/FirmFactCard';

const FirmFact = () => {
	return (
		<div>
			<div className={styles.TitleContainer}>
				<h1>Firm Facts!!</h1>
				<span>X</span>
			</div>
			<div className={styles.cardsContainer}>
				<FirmFactCard buttonText="This is a two line button that terminates with" />
				<FirmFactCard buttonText="This is a two line button that terminates with" />
				<FirmFactCard buttonText="This is a one line button" buttonVariant="default" />
				<FirmFactCard buttonText="This is a two line button that terminates with" />
				<FirmFactCard buttonText="This is a two line button that terminates with" text={"initial"} variant="border" />
				<FirmFactCard buttonText="This is a two line button that terminates with" text={"disabled"} variant="border" disabled />
				<FirmFactCard buttonText="This is a two line button that terminates with" text={"hover"} variant="border" />
			</div>
		</div>
	);
};

export default FirmFact;