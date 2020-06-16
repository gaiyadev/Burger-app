import React from 'react'
import NavbarItems from '../Navbar/Navbar';
import Logo from '../../Logo/Logo';
import styles from '../SideDrawer/Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={styles.SideDrawer} >
                <Logo height="11%" />
                <nav>
                    <NavbarItems />
                </nav>
            </div>
        </Aux>
    );
}
export default sideDrawer;