import React from 'react';
import styles from '../BurgerIngredient/BurgerIngredient.module.css';

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch (ingredient.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom} ></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop} >
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={styles.meat} ></div>;
            break;
        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case ('Salad'):
            ingredient = <div className={styles.Salad} ></div>;
            break;
        case ('bacon'):
            ingredient = <div className={styles.Bacon} ></div>;
            break;
    }

};

export default BurgerIngredient;