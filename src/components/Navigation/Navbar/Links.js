import React from 'react';
import styles from '../Navbar/Links.module.css';
import { NavLink } from 'react-router-dom';

const navbarItem = (props) => (
    <li className={styles.Link}>
        <NavLink className={props.active ? styles.active : null}
            to={props.link}>{props.children}
        </NavLink>
    </li>
);

export default navbarItem;