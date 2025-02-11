import { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [{ name: 'Ogre' }, { name: 'Giant' }, { name: 'Cyclops' }, {name: 'Orc'}],
		};
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => (
					<h1 key={v4()}>{monster.name}</h1> // generated unique key for each item
				))}
			</div>
		);
	}
}

export default App;
