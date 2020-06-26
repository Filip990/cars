import React from "react";

import { Container, RedLight, GreenLight } from "./TrafficLight.styled";

function TrafficLight({ isRedActive, position }) {
	return (
		<Container position={position}>
			<RedLight isActive={isRedActive} />
			<GreenLight isActive={!isRedActive} />
		</Container>
	);
}

export default TrafficLight;
