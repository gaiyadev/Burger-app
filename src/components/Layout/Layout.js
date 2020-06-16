import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDrawer: false
        }
    }
    SideDrawerHandler = () => {
        this.setState({ showDrawer: true });
    }
    render() {
        return (
            <Aux>
                <div>
                    <Toolbar></Toolbar>
                    <SideDrawer open={this.state.showDrawer}
                        closed={this.SideDrawerHandler} >
                    </SideDrawer>
                </div>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}
export default Layout;

//Application layout file