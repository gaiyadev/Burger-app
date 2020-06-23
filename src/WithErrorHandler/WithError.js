import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';
import Aux from '../hoc/Auxillary';

const withError = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,

        }
        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.resInterceptors = axios.interceptors.response.use(response => response,
                error => {
                    this.setState({ error: error });
                });
        }
        //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
        componentWillUpdate() {

            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);

        }
        errorConfirmHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        closed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux >
            );
        }
    }
}

export default withError;