import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 10px;
	left: ${(props) => `calc(${props.position}% - 15px)`};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 30px;
	height: 60px;
	border: 2px solid black;
	border-radius: 4px;
	background: #aaa;
`;

export const RedLight = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${(props) => (props.isActive ? "red" : "darkred")};
`;

export const GreenLight = styled(RedLight)`
	background: ${(props) => (props.isActive ? "lime" : "green")};
`;
