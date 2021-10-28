import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

function App() {
	const [todo, setTodo] = useState({ description: '', date: '' });
	const [todos, setTodos] = useState([]);

	const inputChanged = (event) => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	};

	const addTodo = () => {
		setTodos([...todos, todo]);
		setTodo({ description: '', date: '' });
	};

	const deleteTodo = (row) => {
		setTodos(todos.filter((todo, index) => index !== row));
	};

	return (
		<div className='App'>
			<TextField
				style={{ marginRight: 10 }}
				label='Description'
				name='description'
				value={todo.description}
				onChange={inputChanged}
			/>
			<TextField
				style={{ marginRight: 10 }}
				label='Date'
				name='date'
				value={todo.date}
				onChange={inputChanged}
			/>
			<Button
				style={{ margin: 10 }}
				color='primary'
				variant='outlined'
				onClick={addTodo}>
				Add
			</Button>
			<table>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>{todo.description}</td>
							<td>{todo.date}</td>
							<td>
								<IconButton
									size='small'
									color='secondary'
									onClick={() => deleteTodo(index)}>
									<DeleteIcon />
								</IconButton>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
