import React from "react";

import Car from "../Car/Car";

import { MainContainer } from "./CarsInfo.styled";

const CarsInfo = ({ cars }) => {
	return (
		<MainContainer>
			{cars.map((car) => (
				<Car key={car.id} {...car} />
			))}
		</MainContainer>
	);
};

export default CarsInfo;
