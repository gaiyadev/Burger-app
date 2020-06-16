import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
                {igKey}:</span> {props.ingredients[igKey]}
        </li>);
    });
    return (
        <Aux>
            <h2>Your Order: </h2>
            <p>A delicious order with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h4 style={{ color: 'red' }} >NGN {props.price.toFixed(2)}</h4>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancel} btnType='Danger'>Cancel</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>Continue</Button>
        </Aux>
    );
};

export default orderSummary; 