import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/Order';


const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 30,
    meat: 40,
    bacon: 80
};

// Burger builder component
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 200,
            purchasable: false,
            modal: false
        }
    }

    purchasableHandler(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    modalHandler = () => {
        this.setState({ modal: true });
    }

    addHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddtion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
        this.purchasableHandler(updateIngredients);
    }

    removeHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        // if (oldCount <= 0) {
        //     return;
        // }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
        this.purchasableHandler(updateIngredients);
    }

    closedHandler = () => {
        this.setState({ modal: false });

    }

    purchaseContinueHandler = () => {
        alert('u continue');
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.modal} modalClosed={this.closedHandler} >
                    <OrderSummary purchaseCancel={this.closedHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice} ingredients={this.state.ingredients} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls disabled={disableInfo}
                    ingredientSubtracted={this.removeHandler}
                    ingredientAdded={this.addHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.modalHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
//Burger builder component