import React from 'react';
import NavigationBar from '../NavigationBar';
import Game from '../GameOfLifeGrid/Game';
import Welcome from '../About/Welcome';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPage:  'dashboard',
    }
  }

  renderDashboard = (e) => {
    e.preventDefault();
    this.setState({ selectedPage: 'dashboard' });
    sessionStorage.setItem('selectedPage', 'dashboard');
  }

  renderWelcome = (e) => {
    e.preventDefault();
    this.setState({ selectedPage: 'about' });
    sessionStorage.setItem('selectedPage', 'about');
  }

  renderSelectedPage = () => {
    switch (this.state.selectedPage) {
      case 'dashboard':
        return <Game />;
      case 'about':
        return <div style={{ marginTop: '100px' }}>
          <Welcome />
        </div>;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <NavigationBar
          renderDashboard={this.renderDashboard}
          renderWelcome={this.renderWelcome}
          selectedPage={this.state.selectedPage}
        />
        <div className="container">
          <div style={{ marginTop: '2.5rem' }}>
            {this.renderSelectedPage()}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;