import React, { useState } from 'react';
import './App.css';

function App1(props) {
	return (
		<div className='App'>
			{props.message.length > 10 ? <p>Too long</p> : <p>{props.message}</p>}
		</div>
	);
}

export default App1;
