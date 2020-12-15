import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RestoreIcon from '@material-ui/icons/Restore';
import ClearIcon from '@material-ui/icons/Clear';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SpaIcon from '@material-ui/icons/Spa';
import SaveIcon from '@material-ui/icons/Save';
import SpeedIcon from '@material-ui/icons/Speed';

class GameMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			speed: false
		}
	}

	changeSpeed = (e) => {
		e.preventDefault();
		this.setState({ speed: !this.state.speed });
	}

	renderPlayPause = () => {
		switch (this.props.playState) {
			case 'play':
				return <button className='btnIcon'  data-testid='play' onClick={this.props.playButton} >
					<PlayArrowIcon />
				</button>;
			case 'resume':
				return <button className='btnIcon' data-testid='resume' onClick={this.props.resumeButton} >
					<PlayArrowIcon />
				</button>
			case 'pause':
				return <button className='btnIcon' data-testid='pause' onClick={this.props.pauseButton}>
					<PauseIcon />
				</button>
			default :
				return null;
		}
	}

	render() {
		return (
			<div style={{display: 'flex', verticalAlign: 'middle', paddingBottom: '10px'}}>
					{this.renderPlayPause()}
					<button className='btnIcon' data-testid='speed' onClick={this.changeSpeed}>
						<SpeedIcon />
					</button>
					{this.state.speed ? (
						<button className='btnIcon' data-testid='slow' onClick={this.props.slow} style={{ backgroundColor: '#063a4c41' }} >
							<AcUnitIcon />
						</button>
					) : null
					}
					{this.state.speed ? (
						<button className='btnIcon' data-testid='fast' onClick={this.props.fast} style={{ backgroundColor: '#063a4c41' }} >
							<WhatshotIcon />
						</button>
					) : null
					}
					<button className='btnIcon' data-testid='back' onClick={this.props.stop}>
						<RestoreIcon />
					</button>
					{this.props.history ?
						null : (
							<button className='btnIcon' data-testid='reset' onClick={this.props.clear}>
								<ClearIcon />
							</button>
						)
					}
					{this.props.history ?
						null : (
							<button className='btnIcon' data-testid='seed' onClick={this.props.seed}>
								<SpaIcon />
							</button>
						)
					}
					{this.props.history ?
						null : (
							<button className='btnIcon' data-testid='save' onClick={this.props.save}>
								<SaveIcon style={{color: this.props.loggedIn ? '#17C5FA' : '#036C8D'}}/>
							</button>
						)
					}
				{this.props.saveText !== '' ? <div><p className='textAnimationSave' style={{paddingBottom: '10px', color: !this.props.loggedIn ? 'red' : null}}>&nbsp;&nbsp;{this.props.saveText}</p></div> : null}

				{this.props.gameInformation !== '' ? <div><p className='textAnimationSave' style={{paddingBottom: '10px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.gameInformation}</p></div> : null}
			</div>
		)
	}
}

export default GameMenu;