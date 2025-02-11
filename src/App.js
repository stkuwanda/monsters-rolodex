import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchText: '',
		};
	}

	componentDidMount() {
		const getUsers = async (url) => {
			const response = await fetch(url);
			const result = await response.json();
			this.setState(
				(state, props) => ({ ...state, monsters: result }),
				() => console.log(this.state)
			);
		};

		getUsers('https://jsonplaceholder.typicode.com/users');
	}

	onSearchChange(event)  {
		this.setState(
			{ searchText: event.target.value.toLowerCase() },
			() => console.log(this.state)
		);
	}

	render() {
		const { monsters, searchText } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchText)
		);

		return (
			<div className='App'>
				<input
					className='search-box'
					type='search'
					placeholder='search monsters'
					onChange={onSearchChange.bind(this)}
				/>
				{/* {filteredMonsters.map((monster) => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))} */}
				<CardList />
			</div>
		);
	}
}

export default App;
