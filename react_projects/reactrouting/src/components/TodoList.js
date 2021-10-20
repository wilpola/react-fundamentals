import React, { useState, useEffect } from 'react';

function TodoList() {
	const [todo, setTodo] = useState({ description: '', date: '' });
	const [todos, setTodos] = useState([]);

	const inputChanged = (event) => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	};

	const addTodo = () => {
		setTodos([...todos, todo]);
		setTodo({ description: '', date: '' });
	};

	const handleDelete = (event) => {
		console.log(event.target.parentNode.parentNode.attributes);
		// console.log(
		// 	todos.splice(event.target.parentNode.parentNode.attributes.name, 1)
		// );
		const index = todos.indexOf(
			parseFloat(event.target.parentNode.parentNode.attributes.name)
		);
		if (index > -1) {
			setTodos(...todos, todos.splice(index, 1));
		}
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className='App'>
			<input
				placeholder='Description'
				name='description'
				value={todo.description}
				onChange={inputChanged}
			/>
			<input
				placeholder='Date'
				name='date'
				value={todo.date}
				onChange={inputChanged}
			/>
			<button onClick={addTodo}>Add</button>
			<table style={{ margin: 'auto' }}>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index} name={index}>
							<td>{todo.description}</td>
							<td>{todo.date}</td>
							<td>
								<button onClick={handleDelete}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TodoList;
