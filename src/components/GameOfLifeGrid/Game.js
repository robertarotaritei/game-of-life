import React from 'react';
import GameMenu from './GameMenu';

class Game extends React.Component {
	constructor() {
		super();
		this.speed = 1200;
		this.cols = 80;
		this.rows = 40;
		this.state = {
			gridFull: sessionStorage.getItem('initialState') !== null ? JSON.parse(sessionStorage.getItem('initialState')) : Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
			click: false,
			playState: 'play'
		}
	}

	arrayClone(arr) {
		return JSON.parse(JSON.stringify(arr));
	}

	onMouseClicked = (event) => {
		if (event.type === "mousedown") {
			this.setState({ click: true });
		}
		else {
			this.setState({ click: false });
		}
	}

	seed = () => {
		let gridCopy = JSON.parse(JSON.stringify((this.state.gridFull)));
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = !gridCopy[i][j];
				}
			}
		}
		this.setState({ gridFull: gridCopy });
		this.setState({ saveText: '' });
	}

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);

		this.setState({ playState: "pause" });
		sessionStorage.setItem('initialState', JSON.stringify(this.state.gridFull));
	}

	resumeButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
		this.setState({ playState: "pause" });
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
		this.setState({ playState: "resume" });
	}

	stopButton = () => {
		clearInterval(this.intervalId);
		this.setState({ gridFull: sessionStorage.getItem('initialState') !== null ? JSON.parse(sessionStorage.getItem('initialState')) : Array(this.rows).fill().map(() => Array(this.cols).fill(false)) });
		this.setState({ playState: "play" });
	}

	slow = () => { this.speed = 1200; this.resumeButton(); }

	fast = () => { this.speed = 700; this.resumeButton(); }

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({ gridFull: grid });
		clearInterval(this.intervalId);
		this.setState({ playState: "play" });
	}

	play = () => {
		this.calculateNextGen();
	}

	calculateNextGen() {
		let nextGeneration = this.arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let neighbors = this.calculateNeighbors(i, j);
				nextGeneration[i][j] = neighbors === 3 || nextGeneration[i][j];
				nextGeneration[i][j] = neighbors >= 2 && neighbors <= 3 && nextGeneration[i][j];
			}
		}

		this.setState({ gridFull: nextGeneration });
	}

	calculateNeighbors(i, k) {
		let neighbors = 0;
		let grid = this.state.gridFull;

		if (i > 0) {
			neighbors += grid[i - 1][k];
			neighbors += k > 0 ? grid[i - 1][k - 1] : 0;
			neighbors += k < this.cols - 1 ? grid[i - 1][k + 1] : 0;
		}

		if (i < this.rows - 1) {
			neighbors += grid[i + 1][k];
			neighbors += k > 0 ? grid[i + 1][k - 1] : 0;
			neighbors += k < this.cols - 1 ? grid[i + 1][k + 1] : 0;
		}

		neighbors += k > 0 ? grid[i][k - 1] : 0;
		neighbors += k < this.cols - 1 ? grid[i][k + 1] : 0;

		return neighbors;
	}

	colorBasedOnNeighbors(i, k) {
		let neighbors = this.calculateNeighbors(i, k);

		if (neighbors < 2) {
			return '#009ECE';
		}
		if (neighbors < 4) {
			return '#17C5FA';
		}
		return '#9BE8FF';

	}

	mapGrid() {
		return (
			<div style={{ display: "grid", gridTemplateColumns: `repeat(${this.cols}, 16px)` }}>
				{this.state.gridFull.map((rows, i) =>
					rows.map((col, k) => (
						<div
							className='cell'
							data-testid={`${i}-${k}`}
							key={`${i}-${k}`}
							onClick={() => {
								let g = this.state.gridFull;
								g[i][k] = !g[i][k];
								this.setState({ gridFull: g })
							}}
							onMouseEnter={() => {
								if (this.state.click === true) {
									let g = this.state.gridFull;
									g[i][k] = !g[i][k];
									this.setState({ gridFull: g })
								}
							}}
							style={{
								backgroundColor: this.state.gridFull[i][k] ? this.colorBasedOnNeighbors(i, k) : undefined
							}}
						/>
					))
				)}
			</div>
		);
	}

	render() {
		return (
			<div style={{ marginTop: '30px' }}>
				<div onMouseDown={this.onMouseClicked} onMouseUp={this.onMouseClicked}>
					<GameMenu
						playState={this.state.playState}
						playButton={this.playButton}
						resumeButton={this.resumeButton}
						pauseButton={this.pauseButton}
						stop={this.stopButton}
						slow={this.slow}
						fast={this.fast}
						clear={this.clear}
						seed={this.seed}
					/>
					{this.mapGrid()}
				</div>
			</div>
		);
	}
}

export default Game;