import { Component } from 'react';

class Card extends Component {
	render() {
		const { className, name, email, src } = this.props;

		return (
			<div className={className}>
				<img src={src} alt={`monster ${name}`} />
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
