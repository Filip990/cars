import styled from "styled-components";

export const Tracks = styled.div`
	position: relative;
`;

export const TracksContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

export const Track = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 4rem;
	border-bottom: 1px solid transparent;
`;

export const CarImage = styled.img`
	transform: scaleX(-1);
	max-width: 10%;
	max-height: 100%;
	position: absolute;
`;

export const Limits = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
`;

export const LimitLine = styled.div`
	position: absolute;
	top: -12rem;
	left: ${(props) => `${props.position}%`};
	height: 12rem;
	border-left: 2px dashed #666;
`;
