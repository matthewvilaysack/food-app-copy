import React, { useState } from 'react';
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
			<div className="opening-page">
				<div class="opening-page__container">
					<h1 class="font-medium leading-tight text-5xl mt-0 mb-2 bg-black">welkmcsoadmdkos</h1>
					<a class="btn" href="">Click here to learn more!</a>
				</div>
				
			</div>
			<div className="app__container">
				<video
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
			<div className="app__input">
				{playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
		</div>
	);
}

export default App;
