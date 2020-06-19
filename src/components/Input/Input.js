import React from "react";

import { SearchInput } from "./Input.styled";

const Input = (props) => {
	return (
		<SearchInput
			type="search"
			value={props.value}
			onChange={props.onChange}
			placeholder="Search"
		/>
	);
};

export default Input;
