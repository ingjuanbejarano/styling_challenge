import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.mainContainer}>
			{children}
		</div>
	);
};

export default Layout;