import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const decrease = () => {
		setCount(count - 1);
	};
	const increase = () => {
		setCount(count + 1);
	};
	const resetCounter = () => {
		setCount(0);
	};

	return (
		<div className='App'>
			<p>You have pressed the button {count} times</p>
			<button onClick={() => increase()}>+</button>
			<button onClick={() => decrease()}>-</button>
			<button onClick={() => resetCounter()}>clear</button>
		</div>
	);
}

export default App;
