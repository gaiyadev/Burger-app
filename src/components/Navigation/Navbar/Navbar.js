import React from 'react';
import styles from '../Navbar/NavbarItems.module.css';
import Links from '../Navbar/Links';

const navbarItems = (props) => (
    <ul className={styles.NavbarItems} >
        <Links link="/" >BurgerBuilder</Links>
        <Links link="/orders">Orders</Links>
    </ul>
);

export default navbarItems; 