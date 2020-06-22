import React from "react";

import { SearchInput } from "./Input.styled";

const Input = ({ value, onChange, type, placeholder }) => {
	return (
		<SearchInput
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
