import React from 'react';
import { observer } from 'mobx-react'
import './App.css'
import Dashboard from './components/pages/Dashboard';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Dashboard />
      </div>
    );
  }
}

export default observer(App);