import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import DistanceMeter from "../DistanceMeter/DistanceMeter";
import TrackGrid from "../TrackGrid/TrackGrid";

import { Tracks, TracksContainer, Track, CarImage } from "./Scale.styled";

const Scale = () => {
	const { selectedCars } = useSelector((state) => state);
	const [isActive, setActive] = useState(false);

	return (
		<>
			<DistanceMeter />
			<Tracks>
				<TrackGrid />
				<TracksContainer>
					{selectedCars.map((car) => (
						<Track key={car.name}>
							<CarImage src={car.image} alt={car.name} speed={car.speed} />
						</Track>
					))}
				</TracksContainer>
			</Tracks>
			<Button
				isDisabled={selectedCars.length < 3}
				onClick={() => setActive((prevActive) => !prevActive)}
			>
				Start
			</Button>
		</>
	);
};

export default Scale;
