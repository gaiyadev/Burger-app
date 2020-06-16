import React from 'react';
import styles from '../../../components/UI/Modal/Modal.module.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} closed={props.modalClosed} />
        <div className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;