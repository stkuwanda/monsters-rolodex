import { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{ name: 'Ogre', id: v4() },
				{ name: 'Giant', id: v4() },
				{ name: 'Cyclops', id: v4() },
				{ name: 'Orc', id: v4() },
			],
		};
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
