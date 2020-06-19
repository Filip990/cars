import React from "react";

import { Image, Container } from "./Car.styled";

const Car = ({ description, image, name, speed }) => {
	return (
		<Container>
			<h4>{name}</h4>
			<Image src={image} alt={name} />
		</Container>
	);
};

export default Car;
