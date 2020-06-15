import React from 'react';
import styles from '../../components/Burger/BurgerIngredient/Burger.module.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/Burgeringredient';

const burger = (props) => {
    const BIngredient = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });

    return (
        <div className={styles.Burger} >
            <BurgerIngredient type="bread-top" />
            {BIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;