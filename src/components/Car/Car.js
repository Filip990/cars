import React from "react";
import { useDispatch } from "react-redux";

import { addCarToTestScale } from "../../store/actionCreators";

import {
	Image,
	Container,
	Details,
	Description,
	FlipCard,
	FlipCardFront,
	FlipCardBack,
} from "./Car.styled";

const Car = ({ description, image, name, speed, id }) => {
	const dispatch = useDispatch();

	const addCar = () => {
		dispatch(addCarToTestScale({ name, speed, image, id }));
	};

	return (
		<Container onClick={addCar}>
			<FlipCard>
				<FlipCardFront>
					<h4>{name}</h4>
					<Image src={image} alt={name} />
				</FlipCardFront>
				<FlipCardBack>
					<Details img={image}>
						<Description>{description}</Description>
						<p>Speed: {speed}</p>
					</Details>
				</FlipCardBack>
			</FlipCard>
		</Container>
	);
};

export default Car;
