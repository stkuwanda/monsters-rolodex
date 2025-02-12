import Card from '../card/card.component';

const CardList = ({ monsters }) => {

	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				const { id, name, email } = monster;
				const src = `https://robohash.org/${monster.id}?set=set2&size=180x180`;

				return (
					<Card
						key={id}
						className='card-container'
						name={name}
						email={email}
						src={src}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
