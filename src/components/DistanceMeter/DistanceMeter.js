import React from "react";

import { Container, DistanceMark } from "./DistanceMeter.styled";

function DistanceMeter() {
	return (
		<Container>
			{[...Array(9).keys()].map((i) => (
				<DistanceMark key={i}>{`${i + 1}x5`}</DistanceMark>
			))}
		</Container>
	);
}

export default DistanceMeter;
