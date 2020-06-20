import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 90%;
	margin: auto;
	column-gap: 1px;
	row-gap: 1px;
	overflow: hidden;
`;
