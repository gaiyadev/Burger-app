import React from 'react';
import styles from '../Navbar/NavbarItems.module.css';
import Links from '../Navbar/Links';

const navbarItems = (props) => (
    <ul className={styles.NavbarItems} >
        <Links link="/" active={true}>BurgerBuilder</Links>
        <Links link="/">Checkout</Links>
    </ul>
);

export default navbarItems; 