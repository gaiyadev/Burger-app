import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from '../../Order/CheckoutSummary.css';
const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Hope is well</h1>
            <div style={{ widows: '300p', height: '300px' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                clicked={}
                btnType='Danger'>
                Cancel</Button>
            <Button clicked={}
                btnType='Success'>Continue</Button>
        </div>
    );
}

export default checkoutSummary;