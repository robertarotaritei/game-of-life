import React from 'react';

class Welcome extends React.Component {

    render() {
        return (
            <div>
                <p className='textAnimationBig' style={{ fontSize: '3rem', textAlign: 'center' }}>
                    Welcome to the <span style={{ color: '#17c5fa' }}> Game <span style={{ color: '#9be8ff' }}>of</span> Life</span>.
                </p>
                <div style={{ display: 'flex', marginTop: '40px'}}>
                    <img src={'game-of-life/gameoflife.gif'} style={{ border: 'solid', borderWidth: 'thick', borderColor: '#17c5fa'}} alt="GameOfLife" />
                    <p  className='textAnimationBig' style={{ marginLeft: '20px'}}>
                        &nbsp;&nbsp;&nbsp;The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.<br />
                        It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. <br />
                        &nbsp;&nbsp;&nbsp;One interacts with the Game of Life by creating an initial configuration and observing how it evolves. <br />
                        &nbsp;&nbsp;&nbsp;The game has three rules: <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Any live cell with two or three live neighbours survives. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Any dead cell with three live neighbours becomes a live cell.<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. All other live cells die in the next generation. <br />
                    </p>
                </div>
            </div>
        );
    }
}

export default Welcome;