import { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		const getUsers = async (url) => {
			const response = await fetch(url);
			const result = await response.json();
			this.setState((state, props) => ({ ...state, monsters: result }), () => console.log(this.state));
		}

		getUsers('https://jsonplaceholder.typicode.com/users');
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;
