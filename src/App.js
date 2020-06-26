import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/Checkout/Checkout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );

}

export default App;

//entry point application file