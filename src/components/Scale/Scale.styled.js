import styled from "styled-components";

import Input from "../Input/Input";
import Button from "../Button/Button";

export const ScaleContainer = styled.div`
	border: 1px solid black;
	border-collapse: collapse;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	width: 100%;
	height: 12rem;
	margin: 10px 0;
`;

export const Track = styled.div`
	border: 1px solid black;
	text-align: left;
`;

export const CarImage = styled.img`
	width: 4rem;
	vertical-align: bottom;
	transform: scaleX(-1);
	animation-fill-mode: forwards;
	transition: margin-left ${(props) => props.speed * props.animationSpeed}00ms
		linear;
	margin-left: ${(props) => (props.animate ? "52rem" : "0")};
`;

export const OptionsContainer = styled.div`
	text-align: right;
`;

export const InputLabel = styled.span`
	padding: 12px;
	font-size: 12px;
	font-weight: 600;
	color: grey;
`;

export const NumberInput = styled(Input)`
	width: 6rem;
	margin-right: 2rem;
`;

export const StartButton = styled(Button)`
	padding: 4px;
	width: 4rem;
	background: #4e8ce8;
	color: white;
	border-radius: 1rem;
	border: none;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	outline: none;
	&:disabled {
		background: #afaeae;
		cursor: not-allowed;
	}
`;
