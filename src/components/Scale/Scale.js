import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
	ScaleContainer,
	Track,
	CarImage,
	OptionsContainer,
	NumberInput,
	StartButton,
	InputLabel,
} from "./Scale.styled";

const Scale = () => {
	const { selectedCars } = useSelector((state) => state);
	const [startAnimation, setStartAnimation] = useState(false);
	const [animationSpeed, setAnimationSpeed] = useState(1);

	const startRace = () => {
		setStartAnimation((prevAnimation) => !prevAnimation);
	};

	const changeAnimationSpeed = (event) => {
		setAnimationSpeed(event.target.value);
	};

	return (
		<>
			{selectedCars.length > 0 && (
				<>
					<ScaleContainer>
						{selectedCars.map((car) => (
							<Track key={car.name}>
								<CarImage
									src={car.image}
									alt={car.name}
									animate={startAnimation}
									speed={car.speed}
									animationSpeed={animationSpeed}
								/>
							</Track>
						))}
					</ScaleContainer>
					<OptionsContainer>
						<InputLabel>Animation Speed</InputLabel>
						<NumberInput
							type="number"
							value={animationSpeed}
							onChange={changeAnimationSpeed}
						/>
						<StartButton
							title="start"
							onClickHandler={startRace}
							disabled={selectedCars.length < 3}
						/>
					</OptionsContainer>
				</>
			)}
		</>
	);
};

export default Scale;
