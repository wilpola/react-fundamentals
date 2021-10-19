import React, { useState } from 'react';
import './App.css';

function Repo() {
	const [repos, setRepos] = useState([]);
	const [keyword, setKeyword] = useState('');

	const fetchRepos = () => {
		if (keyword.length === 0) {
			window.alert('You must enter a keyword!');
			return;
		} else {
			fetch(`https://api.github.com/search/repositories?q=${keyword}`)
				.then((response) => response.json())
				.then((resData) => {
					setRepos(resData.items);
					console.log(resData);
				});
		}
	};

	const handleKeyword = (e) => {
		setKeyword(e.target.value);
	};

	return (
		<div className='App' style={{ margin: '60px 8%', textAlign: 'left' }}>
			<h1> Repositories </h1>
			<input
				type='text'
				placeholder='Keyword'
				name='keyword'
				onChange={handleKeyword}
			/>
			<button onClick={fetchRepos}>Search </button>
			{repos.length === 0 ? (
				<p>Type in a keyword, and search for repositories</p>
			) : (
				<table>
					<thead style={{ fontWeight: '800' }}>
						<tr>
							<td>Name</td>
							<td>URL</td>
						</tr>
					</thead>
					<tbody>
						{repos.map((repo, index) => (
							<tr key={index}>
								<td>{repo.full_name}</td>
								<td>
									<a href={repo.url}>{repo.url}</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default Repo;
