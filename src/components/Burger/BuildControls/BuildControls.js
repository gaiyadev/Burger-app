import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Burger/BuildControls/BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>NGN {props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                removed={() => props.ingredientSubtracted(ctrl.type)}
                added={() => props.ingredientAdded(ctrl.type)}
            />
        ))}
        <button
            disabled={!props.purchasable}
            onClick={props.ordered}
            className={styles.OrderButton}>Order Now</button>
    </div>
);

buildControls.propsType = {
    label: PropTypes.string.isRequired,
}
export default buildControls;