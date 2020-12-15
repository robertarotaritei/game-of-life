import React from 'react';
import Game from '../GameOfLifeGrid/Game'

class HistoryList extends React.Component {

    render() {
        return (
            <div>
                {this.props.games.map(currentGame => (
                    <Game key={currentGame.id} game={currentGame} history={true} />
                ))}
                <div style={{ paddingBottom: 20 }} />
            </div>
        );
    }
}

export default HistoryList;