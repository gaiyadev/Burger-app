import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/Order';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithError from '../../WithErrorHandler/WithError';


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
            modal: false,
            loading: false,
            error: null
        }
    }

    componentDidMount() {
        axios.get('https://burger-app-49821.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            }).catch(err => {
                this.setState({ error: true });
                console.log(err)
            });
    }


    //..Function to able/disable order button
    purchasableHandler(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    //.. Function to open and close modal window
    modalHandler = () => {
        this.setState({ modal: true });
    }

    //.. Function to add ingredient
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

    //..Function to reduce ingredient
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

    //..Function to close modal window
    closedHandler = () => {
        this.setState({ modal: false });
    }

    //..Function to checkout
    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' +
                encodeURIComponent(this.state.ingredients[i]));

        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })

    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = null;

        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        let burger = this.state.error ?
            <p>ingredient can be found</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls disabled={disableInfo}
                        ingredientSubtracted={this.removeHandler}
                        ingredientAdded={this.addHandler}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.modalHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary purchaseCancel={this.closedHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.state.totalPrice} ingredients={this.state.ingredients} />;


        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.modal} modalClosed={this.closedHandler} >
                    {orderSummary}
                </Modal>

                {burger}
            </Aux>
        );
    }
}

//Props validation
BurgerBuilder.propsType = {
    ingredients: PropTypes.number.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientSubtracted: PropTypes.func.isRequired,
    ordered: PropTypes.func.isRequired,
    purchasable: PropTypes.bool
}
export default WithError(BurgerBuilder, axios);
//Burger builder component