import React from "react";

const Input = ({ className, value, onChange, type, placeholder }) => {
	return (
		<input
			className={className}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
