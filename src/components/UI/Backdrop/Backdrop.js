import React from 'react';
import styles from '../../../components/UI/Backdrop/Backdrop.module.css';

const backDrop = (props) => (
    props.show ? <div onClick={props.closed} className={styles.Backdrop}></div> : null

);
export default backDrop;