import React, { Component } from 'react';
import Order from '../Order/Order';
import axios from '../../axios-order';
import withError from '../../WithErrorHandler/WithError';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        axios.get('/oders.json').then(res => {
            const fetchOrders = [];
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({ orders: fetchOrders })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                })}
            </div>
        );
    }
}

export default withError(Orders, axios);