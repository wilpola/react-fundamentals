import React, { useState } from 'react';

const Calculator = () => {
	const [value, setValue] = useState({ num1: '', num2: '', total: 0 });

	const countOnSubmit = (event) => {
		if (value.num1 !== '' && value.num2 !== '') {
			if (event.target.name === '-') {
				setValue({
					...value,
					total: parseFloat(value.num1) - parseFloat(value.num2),
				});
			}
			if (event.target.name === '+') {
				setValue({
					...value,
					total: parseFloat(value.num1) + parseFloat(value.num2),
				});
			}
			if (event.target.name === 'reset') {
				setValue({ num1: '', num2: '', total: 0 });
			}
		} else {
			window.alert('You have to insert both numbers! \nPlease try again.');
		}
	};

	const inputChanged = (event) => {
		setValue({ ...value, [event.target.name]: event.target.value });
	};

	return (
		<div
			className='calc-container'
			style={{
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}>
			<div>
				<h3> Result= {value.total} </h3>
				<input
					type='number'
					placeholder='First Number'
					name='num1'
					value={value.num1}
					onChange={inputChanged}
				/>
				<input
					type='number'
					placeholder='Second Number'
					name='num2'
					value={value.num2}
					onChange={inputChanged}
				/>
				<button type='submit' name='+' onClick={countOnSubmit}>
					+
				</button>
				<button type='submit' name='-' onClick={countOnSubmit}>
					-
				</button>
				<button type='submit' name='reset' onClick={countOnSubmit}>
					clear
				</button>
				<p>** You can only enter numbers to the input fields above.**</p>
				<p>* The number can be an integer or a float*</p>
			</div>
		</div>
	);
};

export default Calculator;
