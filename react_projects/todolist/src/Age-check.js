import React, { useState } from 'react';

const AgeCheck = () => {
	const [person, setPerson] = useState({ name: '', age: 0 });

	const handleChange = (event) => {
		setPerson({ ...person, [event.target.name]: event.target.value });
	};

	const ageTest = () => {
		if (person.age !== null && person.age !== undefined) {
			person.age >= 18
				? window.alert(`Hello ${person.name}`)
				: window.alert(`You are too young.`);
			setPerson({ name: '', age: 0 });
		} else {
			window.alert('You have to enter you age!');
		}
	};
	return (
		<div className='AgeCheck'>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={person.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='age'
				name='age'
				value={person.age}
				onChange={handleChange}
			/>
			<button onClick={ageTest}>Check age</button>
		</div>
	);
};
export default AgeCheck;
