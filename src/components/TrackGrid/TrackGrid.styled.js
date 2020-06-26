import styled from "styled-components";

export const Grid = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px #666 solid;
	border-radius: 8px;
`;

export const GridRow = styled.div`
	display: flex;

	:not(:last-child) {
		border-bottom: 1px #999 solid;
	}
`;

export const Cell = styled.div`
	display: flex;
	width: 10%;
	height: 4rem;

	:not(:last-child) {
		border-right: 1px #ccc dotted;
	}
`;
