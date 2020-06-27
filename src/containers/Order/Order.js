import React from 'react';
import styles from '../Order/Order.css';
import { checkPropTypes, number } from 'prop-types';
const Order = (props) => {
    const Ingredients = [];
    for (let IngredientName in props.Ingredients) {
        Ingredients.push({
            name: props.Ingredients[IngredientName],
            amount: props.Ingredients[IngredientName]
        });
    }
    const IngredientOutput = Ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block'
        }} key={ig.name} >{ig.name} {ig.amount} </span>
    })
    return (
        <div className={styles.Order} >
            <p>Ingredients:{IngredientOutput}</p>
            <p>Price: NGN {number.parse(props.price).toFix(2)} </p>
        </div>
    );
}

export default Order;