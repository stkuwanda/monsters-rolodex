import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: { firstname: 'Simba', lastname: 'Kuwanda' },
			company: 'Heartbit Technologies',
		};
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Hi my name is {this.state.name.firstname} {this.state.name.lastname}
						, I work at {this.state.company}.
					</p>
					<button
						onClick={() => {
							this.setState({
								name: { firstname: 'Chichie', lastname: 'Kuwanda' },
							});
							console.log(this.state);
						}}
					>
						Click
					</button>
				</header>
			</div>
		);
	}
}

export default App;
