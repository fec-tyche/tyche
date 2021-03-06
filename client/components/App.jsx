import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';
import ProductDetailPage from '../containers/productDetailPageContainer';

const App = (props) => {
  useEffect(() => {
    props.fetchProductList().catch((Err) => {
      console.log('error getting product list:', Err);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/item/1" />} />
        <Route path="/item/:id" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
