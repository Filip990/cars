import React from "react";

import { ButtonBase } from "./Button.styled";

const Button = ({ className, children, onClickHandler, isDisabled }) => {
	return (
		<ButtonBase
			className={className}
			onClick={onClickHandler}
			disabled={isDisabled}
		>
			{children}
		</ButtonBase>
	);
};

export default Button;
