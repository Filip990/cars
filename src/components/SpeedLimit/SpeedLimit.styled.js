import styled from "styled-components";

export const Sign = styled.div`
	position: absolute;
	top: 10px;
	left: ${(props) => `calc(${props.position}% - 30px)`};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 10px solid red;
	font-size: 22px;
	font-weight: bold;
`;
