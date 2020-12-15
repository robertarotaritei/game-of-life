import React from 'react';
import { observer } from 'mobx-react'
import './App.css'
import UserStore from './stores/UserStore';
import Dashboard from './components/pages/Dashboard';
import { runInAction } from 'mobx';

class App extends React.Component {

  constructor() {
    super();

    runInAction(() => {
      UserStore.loading = false;
    });
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

      return (
        <div className="app">
          <Dashboard loggedIn={false} />
        </div>
      );
    }
  }
}

export default observer(App);