import React from "react";

const Button = ({ className, title, onClickHandler, disabled }) => {
	return (
		<button className={className} onClick={onClickHandler} disabled={disabled}>
			{title}
		</button>
	);
};

export default Button;
