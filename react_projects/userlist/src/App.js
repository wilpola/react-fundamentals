import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);
	const [trivia, setTrivia] = useState('');

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((resData) => setUsers(resData.data));
		getTrivia();
	}, []);

	const getTrivia = () => {
		fetch('https://opentdb.com/api.php?amount=1', { method: 'GET' })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setTrivia(data.results[0].question);
				console.log(data.results[0].question);
			});
	};

	return (
		<div className='App'>
			<table>
				<tbody>
					{users.map((user, index) => (
						<tr key={index}>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>
								<img src={user.avatar} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<p>{trivia}</p>
			<button onClick={getTrivia}>New question</button>
		</div>
	);
}

export default App;
