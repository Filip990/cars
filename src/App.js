import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { MainContainer } from "./App.styled";

import CarsInfo from "./components/CarsInfo/CarsInfo";
import Scale from "./components/Scale/Scale";
import AppReducer from "./store/reducer";

function App() {
	const store = createStore(AppReducer);

	return (
		<MainContainer>
			<Provider store={store}>
				<CarsInfo />
				<Scale />
			</Provider>
		</MainContainer>
	);
}

export default App;
