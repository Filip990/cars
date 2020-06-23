import React from "react";
import { useSelector } from "react-redux";

import { ScaleContainer, Track, CarImage } from "./Scale.styled";

const Scale = () => {
	const { selectedCars } = useSelector((state) => state);

	return (
		<>
			{selectedCars.length > 0 && (
				<ScaleContainer>
					{selectedCars.map((car) => (
						<Track key={car.name}>
							<CarImage src={car.image} alt={car.name} />
						</Track>
					))}
				</ScaleContainer>
			)}
		</>
	);
};

export default Scale;
