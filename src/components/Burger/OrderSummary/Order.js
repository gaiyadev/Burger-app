import React from 'react';
import Aux from '../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
                {igKey}:</span> {props.ingredients[igKey]}
        </li>);
    });
    return (
        <Aux>
            <h2>Your Order: <span style={{ color: 'red' }} >NGN {props.price.toFixed(2)}</span></h2>
            <p>A delicious order with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary; 