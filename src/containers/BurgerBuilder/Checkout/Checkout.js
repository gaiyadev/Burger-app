import React, { Component } from 'react';
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../../../containers/BurgerBuilder/Checkout/Contact/Contact';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 0,
        }
    }
    checkoutCancalledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === 'price') {
                price = params[1];
            } else {
                ingredients[params[0]] = +params[1];

            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancalled={this.checkoutCancalledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredients={this.state.ingredients}
                        price={this.state.totalPrice} />)}
                />
            </div>
        );
    }
}

export default Checkout;