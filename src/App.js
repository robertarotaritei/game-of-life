import React from 'react';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css'
import UserStore from './stores/UserStore';
import LoginForm from './components/Login and Registration/LoginForm';
import RegistrationForm from './components/Login and Registration/RegistrationForm';
import Dashboard from './components/pages/Dashboard';
import { runInAction } from 'mobx';

class App extends React.Component {

  constructor() {
    super();

    runInAction(() => {
      UserStore.key = sessionStorage.getItem('key');
      UserStore.username = sessionStorage.getItem('username');
      UserStore.loading = false;
    });
  }

  async componentDidMount() {
    let result = await fetch(`/credentials/user/token?username=${UserStore.username}&token=${UserStore.key}`);
    result = await result.json();

    if (result !== true) {
      sessionStorage.removeItem('key');
      sessionStorage.removeItem('username');
      runInAction(() => {
        UserStore.key = "";
        UserStore.username = "";
      });
    }
  }

  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className='container'>
            <p className='textAnimationBig' style={{ fontSize: '3rem', textAlign: 'center' }}>
              Loading, please wait...
            </p>
          </div>
        </div>
      )
    }
    else {

      if (UserStore.key) {
        return (
          <div className="app">
            <Router>
              <Switch>
                <Route exact path="/" component={() => (<Dashboard loggedIn={true} />)} />
                <Route exact path="/*" render={() => (<Redirect to="/" />)} />
              </Switch>
            </Router>
          </div>
        );
      }

      return (
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/" component={() => (<Dashboard loggedIn={false} />)} />
              <Route exact path="/register" component={RegistrationForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/*" render={() => (<Redirect to="/" />)} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

export default observer(App);