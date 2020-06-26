import React, { Component } from 'react';
import Button from '../../../../components/UI/Button/Button';
import styles from '../../../BurgerBuilder/Checkout/Contact/Contact.css';
import axios from '../../../../axios-order';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const orderData = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Obed M.',
                address: {
                    street: 'kd str5',
                    zipCode: '4687',
                    country: 'Nigeria'
                },
                email: 'test@me.com'
            },
            deliveryMethod: 'very fast'
        };

        axios.post('/orders.json', orderData)
            .then(response => {
                this.setState({ loading: false, purchasable: false })
                console.log(response)

            })
            .catch(err => {
                this.setState({ loading: false, purchasable: false })
                console.log(err)
            });

    }

    render() {
        return (
            <div className={styles.ContactData} >
                <h4>Contact Info</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postalCode" placeholder="postalCode" />
                    <Button cliked={this.orderHandler} btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;