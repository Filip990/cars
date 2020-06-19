import React from "react";
import data from "./data/data.json";

import { MainContainer } from "./App.styled";

import CarsInfo from "./components/CarsInfo/CarsInfo";

function App() {
	const { cars } = data;

	return (
		<MainContainer>
			<CarsInfo cars={cars} />;
		</MainContainer>
	);
}

export default App;
