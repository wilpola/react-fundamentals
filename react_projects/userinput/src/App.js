import React, { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');

	const inputChanged = (event) => {
		setName(event.target.value);
	};

	return (
		<div className='App'>
			{name}
			<br />
			<input value={name} onChange={inputChanged} />
		</div>
	);
}

export default App;
