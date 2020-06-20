import styled from "styled-components";

export const Image = styled.img`
	width: 25vw;
`;

export const FlipCard = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
	box-shadow: 0 0 0 1px black;
	height: 24vw;
	padding: 12px;
	&:hover ${FlipCard} {
		transform: rotateX(180deg);
	}
`;

export const FlipCardFront = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
`;

export const FlipCardBack = styled.div`
	position: absolute;
	transform: rotateX(180deg);
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
`;

export const Details = styled.div`
	color: white;
	font-weight: 700;
	height: 100%;
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
	background-blend-mode: darken;
	background-image: url(${(props) => props.img}),
		linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

export const Description = styled.p`
	margin-top: 0;
	padding: 10px;
`;
