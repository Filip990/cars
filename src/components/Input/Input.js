import React from "react";

import { SearchInput } from "./Input.styled";

const Input = ({ value, onChange }) => {
	return (
		<SearchInput
			type="search"
			value={value}
			onChange={onChange}
			placeholder="Search"
		/>
	);
};

export default Input;
