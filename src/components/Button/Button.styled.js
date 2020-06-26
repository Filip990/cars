import styled from "styled-components";

export const ButtonBase = styled.button`
	color: white;
	background: midnightblue;
	padding: 12px 24px;
	border-radius: 8px;
	border: none;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	outline: none;

	:focus,
	:hover:not(:disabled) {
		background: blue;
	}

	:disabled {
		opacity: 0.4;
	}
`;
