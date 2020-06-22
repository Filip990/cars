import styled from "styled-components";

export const ScaleContainer = styled.div`
	border: 1px solid black;
	border-collapse: collapse;
	display: table;
	width: 100%;
	height: 12rem;
`;

export const Track = styled.div`
	border: 1px solid black;
	display: table-row;
	text-align: left;
`;

export const CarImage = styled.img`
	width: 4rem;
	transform: scaleX(-1);
`;
