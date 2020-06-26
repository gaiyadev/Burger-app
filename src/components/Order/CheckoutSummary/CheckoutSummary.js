import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from '../../Order/CheckoutSummary/CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Hope is well</h1>
            <div style={{ widows: '300p', height: '300px' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'>
                Cancel</Button>
            <Button
                btnType='Success'>Continue</Button>
        </div>
    );
}

export default checkoutSummary;