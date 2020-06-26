import React from "react";

import { ButtonBase } from "./Button.styled";

const Button = ({ className, children, onClick, isDisabled }) => {
	return (
		<ButtonBase className={className} onClick={onClick} disabled={isDisabled}>
			{children}
		</ButtonBase>
	);
};

export default Button;
