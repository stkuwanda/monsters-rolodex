const Card = (props) => {
	const { className, name, email, src } = props;

	return (
		<div className={className}>
			<img src={src} alt={`monster ${name}`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
