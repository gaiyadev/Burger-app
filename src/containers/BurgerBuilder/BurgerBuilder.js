import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

// Burger builder component
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
            </Aux>
        );
    }
}

export default BurgerBuilder;
