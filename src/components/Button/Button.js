import React from "react";

import { ButtonBase } from "./Button.styled";

const Button = ({ children, onClick, isDisabled }) => {
	return (
		<ButtonBase onClick={onClick} disabled={isDisabled}>
			{children}
		</ButtonBase>
	);
};

export default Button;
