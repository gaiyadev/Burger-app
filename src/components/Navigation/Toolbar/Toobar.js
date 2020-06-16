import React from 'react';
import styles from '../../../components/Navigation/Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavbarItems from '../Navbar/Navbar';

const toolbar = (props) => (
    <header className={styles.Toolbar} >
        <div>MENU</div>
        <Logo />
        <nav>
            <NavbarItems/>
        </nav>
    </header>
);

export default toolbar;