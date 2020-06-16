import React from 'react';
import Aux from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toobar';

const layout = (props) => (
    <Aux>
        <div>
            <Toolbar></Toolbar>
        </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>

);
export default layout;

//Application layout file