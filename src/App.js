import React, { useState} from 'react';
import './App.css';

function App() {
	const [playing, setPlaying] = useState(false);

	const HEIGHT = 500;
	const WIDTH = 500;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div className="app">
			<div className="opening-page" style = {{display: !playing ? 'block' : 'none'}}>
				<div className="opening-page__container">
					<h1 className="font-medium leading-tight text-5xl mt-0 mb-2 bg-black"></h1>
					<a className="btn" onClick= {startVideo}>Click here to learn more!</a>
				</div>
			</div>
			<div className="app__container" style = {{display: playing ? 'block' : 'none'}}>
			<div className="video-container">
				<video
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
				<div className="food-info-container">
					<div className="header">
						<h1>Food</h1>
					</div>
					<div className="food-info-container__body">
						<div className="p">fun fact! fun facts!</div>
					</div>
				</div>
			</div>
			<div className="app__input" style = {{display: playing ? 'block' : 'none'}}>
				{playing ? (
					<button class="stop-start-btn" onClick={stopVideo}>Stop</button>
				) : (
					<button class="stop-start-btn" onClick={startVideo}>Start</button>
				)}
			</div>
		</div>
	);
}

export default App;
