import React from "react";

import {
	Image,
	Container,
	Details,
	Description,
	FlipCard,
	FlipCardFront,
	FlipCardBack,
} from "./Car.styled";

const Car = ({ description, image, name, speed }) => {
	return (
		<Container>
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
