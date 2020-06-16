import React from 'react'
import NavbarItems from '../Navbar/Navbar';
import Logo from '../../Logo/Logo';
import styles from '../SideDrawer/Sidedrawer.module.css';


const sideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer} >
            <Logo height="11%" />
            <nav>
                <NavbarItems />
            </nav>
        </div>
    );
}
export default sideDrawer;