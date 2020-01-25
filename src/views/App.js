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
          <Route exact path="/users">
            <Header handleIslogged={this.handleIslogged} />
            <Hero />
          </Route>
          <Route exact path="/users/signup">
            <Header handleIslogged={this.handleIslogged} />
            <Signup />
          </Route>
          <Route exact path="/users/signin">
            <Header handleIslogged={this.handleIslogged} />
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
          <Route exact path="/users/:username">
            <Header handleIslogged={this.handleIslogged} />
            <Home />
          </Route>
          <Route exact path="/users/:username/marks">
            <Header handleIslogged={this.handleIslogged} />
            <Showmarks />
          </Route>
          <Route exact path="/users/:username/quizsets/:quizname">
            <Header handleIslogged={this.handleIslogged} />
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
        <Route exact path="/">
          <Hero />
        </Route>
        {localStorage.quizuserToken
          ? this.PrivateRoutes()
          : this.PublicRoutes()}
      </>
    );
  }
}

export default App;
