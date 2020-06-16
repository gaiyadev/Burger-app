import React from 'react';
import Aux from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <div>
            <Toolbar></Toolbar>
            <SideDrawer></SideDrawer>
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>

);
export default layout;

//Application layout file