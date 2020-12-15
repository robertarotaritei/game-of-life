import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

class NavigationBar extends React.Component {

    render() {
        return (
            <AppBar className='navbar' position="fixed" style={{ background: '#063A4C' }}>
                <Toolbar variant="dense" style={{ maxHeight: '2rem' }}>
                <Container disableGutters>
                    <p style={{ color: '#9BE8FF', marginLeft: '6em' }} >
                        Game Of Life
                    </p>
                    </Container>
                    <Container disableGutters>
                        <div style={{ float: 'right' }}>
                            <button className='btnNav' onClick={this.props.renderDashboard} style={{ backgroundColor: this.props.selectedPage === 'dashboard' ? '#009ECE' : null }}>
                                Dashboard
                            <span className="btnNav__glitch"></span>
                            </button>
                            <button className='btnNav' onClick={this.props.renderWelcome} style={{ backgroundColor: this.props.selectedPage === 'about' ? '#009ECE' : null,  marginRight: '6em' }} >
                                About
                            <span className="btnNav__glitch"></span>
                            </button>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavigationBar;