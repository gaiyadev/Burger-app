import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../containers/BurgerBuilder/BurgerBuilder';

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
// Burger builder component