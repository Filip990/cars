import styled from "styled-components";

import Input from "../Input/Input";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 80%;
	margin: auto;
	column-gap: 1px;
	row-gap: 1px;
	overflow: hidden;
`;

export const SearchInput = styled(Input)`
	width: 60%;
	padding: 10px;
	border: 1px solid grey;
	border-radius: 2rem;
	outline: none;
	margin-bottom: 2rem;
`;

export const NoResults = styled.div`
	font-size: 2rem;
	margin: 2rem;
	font-weight: bold;
	color: grey;
`;
