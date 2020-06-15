import React from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/Burgeringredient';
import styles from '../../components/Burger/BurgerIngredient/Burger.module.css';

const Burger = (props) => {
    return (
        <div className={styles.Burger} >
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;