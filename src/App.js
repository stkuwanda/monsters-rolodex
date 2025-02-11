import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
			this.setState((state, props) => ({ ...state, monsters: result }));
		};

		getUsers('https://jsonplaceholder.typicode.com/users');
	}

	onSearchChange(event) {
		this.setState({ searchText: event.target.value.toLowerCase() });
	}

	render() {
		const { monsters, searchText } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchText)
		);

		return (
			<div className='App'>
				<SearchBox className='search-box' placeholder='search monsters' onChange={onSearchChange.bind(this)} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
