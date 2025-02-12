import { useState, useEffect } from 'react';
import './App.css';
import './components/search-box/search-box.style.css';
import './components/card-list/card-list.style.css';
import './components/card/card.style.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setfilteredMonsters] = useState(monsters);

	const onSearchChange = (event) => {
		const text = event.target.value.toLowerCase();
		setSearchText(text);
	};

	useEffect(() => {
		const getUsers = async (url) => {
			const response = await fetch(url);
			const result = await response.json();
			setMonsters(result);
		};

		getUsers('https://jsonplaceholder.typicode.com/users');
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchText)
		);

		setfilteredMonsters(newFilteredMonsters);
	}, [monsters, searchText]);

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className='search-box'
				placeholder='search monsters'
				onChange={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
