const SearchBox = (props) => {
	return (
		<div>
			<input
				className={props.className}
				type='search'
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default SearchBox;
