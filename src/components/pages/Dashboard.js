import React from 'react';
import NavigationBar from '../NavigationBar';
import Game from '../GameOfLifeGrid/Game';
import HistoryList from '../History/HistoryList';
import Welcome from '../About/Welcome';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPage: sessionStorage.getItem('selectedPage') ? sessionStorage.getItem('selectedPage') : 'dashboard',
      games: []
    }
  }

  componentDidMount() {
    fetch(`/history/gamehistory`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ games: data })
      })
  }

  renderDashboard = (e) => {
    e.preventDefault();
    this.setState({ selectedPage: 'dashboard' });
    sessionStorage.setItem('selectedPage', 'dashboard');
  }

  renderGameHistory = (e) => {
    e.preventDefault();
    this.setState({ selectedPage: 'history' });
    sessionStorage.setItem('selectedPage', 'history');
  }

  renderWelcome = (e) => {
    e.preventDefault();
    this.setState({ selectedPage: 'about' });
    sessionStorage.setItem('selectedPage', 'about');
  }

  renderSelectedPage = () => {
    switch (this.state.selectedPage) {
      case 'dashboard':
        return <Game history={false} loggedIn={this.props.loggedIn}/>;
      case 'history':
        return <HistoryList games={this.state.games} />
      case 'about':
        return <div style={{ marginTop: '100px' }}>
          <Welcome loggedIn={this.props.loggedIn} />
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
          renderGameHistory={this.renderGameHistory}
          renderWelcome={this.renderWelcome}
          selectedPage={this.state.selectedPage}
          loggedIn={this.props.loggedIn}
        />
        <div className="container">
          <div style={{marginTop: '2.5rem'}}>
            {this.renderSelectedPage()}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;