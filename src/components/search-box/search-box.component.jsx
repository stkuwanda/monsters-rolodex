const SearchBox = ({ className, placeholder, onChange }) => {
	return (
		<div>
			<input
				className={className}
				type='search'
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchBox;
