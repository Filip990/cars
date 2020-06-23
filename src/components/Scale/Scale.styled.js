import styled from "styled-components";

export const ScaleContainer = styled.div`
	border: 1px solid black;
	border-collapse: collapse;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	width: 100%;
	height: 12rem;
`;

export const Track = styled.div`
	border: 1px solid black;
	text-align: left;
`;

export const CarImage = styled.img`
	width: 4rem;
	transform: scaleX(-1);
`;
