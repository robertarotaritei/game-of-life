import React from 'react';
import UserStore from '../stores/UserStore';
import { runInAction } from 'mobx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';

class NavigationBar extends React.Component {
    constructor() {
        super();

        this.state = {
            redirectLogin: false
        }
        runInAction(() => {
            UserStore.key = sessionStorage.getItem('key');
        });
    }

    doLogout() {
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('username');

        runInAction(() => {
            UserStore.key = '';
            UserStore.username = '';
        })
    }

    doLogin = () => {
        this.setState({
            redirectLogin: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirectLogin) {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <AppBar className='navbar' position="fixed" style={{ background: '#063A4C' }}>
                <Toolbar variant="dense" style={{ maxHeight: '2rem' }}>
                <Container disableGutters>
                    <p style={{ color: '#9BE8FF', marginLeft: '6em' }} >
                        Welcome {UserStore.username}
                    </p>
                    </Container>
                    <Container disableGutters>
                        <div style={{ float: 'right' }}>
                            {this.renderRedirect()}
                            <button className='btnNav' onClick={this.props.renderDashboard} style={{ backgroundColor: this.props.selectedPage === 'dashboard' ? '#009ECE' : null }}>
                                Dashboard
                            <span className="btnNav__glitch"></span>
                            </button>
                            <button className='btnNav' onClick={this.props.renderGameHistory} style={{ backgroundColor: this.props.selectedPage === 'history' ? '#009ECE' : null }} >
                                Game History
                            <span className="btnNav__glitch"></span>
                            </button>
                            <button className='btnNav' onClick={this.props.renderWelcome} style={{ backgroundColor: this.props.selectedPage === 'about' ? '#009ECE' : null }} >
                                About
                            <span className="btnNav__glitch"></span>
                            </button>
                            {this.props.loggedIn ? (
                                <button className='btnNav' data-testid={'logOut'} onClick={this.doLogout} style={{ marginLeft: '1.5em', marginRight: '6em' }}>
                                    Log out
                                    <span className="btnNav__glitch"></span>
                                </button>
                            ) : (
                                    <button className='btnNav' data-testid={'logIn'} onClick={this.doLogin} style={{ marginLeft: '1.5em', marginRight: '6em' }}>
                                        Log in
                                        <span className="btnNav__glitch"></span>
                                    </button>
                                )}
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavigationBar;