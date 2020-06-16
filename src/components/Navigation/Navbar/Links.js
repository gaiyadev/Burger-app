import React from 'react';
import styles from '../Navbar/Links.module.css';

const navbarItem = (props) => (
    <li className={styles.Link}>
        <a className={props.active ? styles.active : null}
            href={props.link}>{props.children}
        </a>
    </li>
);

export default navbarItem;