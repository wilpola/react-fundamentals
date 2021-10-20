import logo from './logo.svg';
import './App.css';

// Import components
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Home, TodoList, NotFound } from './components/index';

function App() {
	return (
		<Router>
			<div className='App'>
				<Link to='/'>Home</Link>
				<Link to='/todolist'>TodoList</Link>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/todolist' component={TodoList} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
