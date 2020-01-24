import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Signup from './Signup';
import Signin from './Signin';
import Notfound from './Notfound';
import Home from './Home';
import Showquiz from './Showquiz';
import Showmarks from './Showmarks';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      islogged: false
    };
  }

  handleIslogged = value => {
    this.setState({ islogged: value });
  };
  PublicRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin handleIslogged={this.handleIslogged} />
          </Route>
          <Route exact>
            <Notfound />
          </Route>
        </Switch>
      </>
    );
  }
  PrivateRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/marks">
            <Showmarks />
          </Route>
          <Route exact path="/quizsets/:quizname">
            <Showquiz />
          </Route>
          <Route exact>
            <Notfound />
          </Route>
        </Switch>
      </>
    );
  }

  render() {
    return (
      <>
        <Header handleIslogged={this.handleIslogged} />
        {localStorage.quizuserToken
          ? this.PrivateRoutes()
          : this.PublicRoutes()}
      </>
    );
  }
}

export default App;
