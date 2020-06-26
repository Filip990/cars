import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import DistanceMeter from "../DistanceMeter/DistanceMeter";
import TrackGrid from "../TrackGrid/TrackGrid";

import { Tracks, TracksContainer, Track, CarImage } from "./Scale.styled";

const Scale = () => {
	const { selectedCars, distance } = useSelector((state) => state);
	const [carPositions, setCarPositions] = useState({});
	const [isActive, setActive] = useState(false);

	// useRef is here, not to be attached to the DOM, but because changing it's "current" property
	// won't trigger the re-render
	const requestRef = useRef(null);

	const trackLength = distance * 9;

	const animate = useCallback(() => {
		setCarPositions((prevPositions) =>
			selectedCars.reduce((acc, car) => {
				let speedLimit = car.speed;

				let newCarPosition =
					(prevPositions[car.id] || 0) + speedLimit / trackLength;

				return {
					...acc,
					[car.id]: newCarPosition > 90 ? 90 : newCarPosition,
				};
			}, {})
		);
		// Change the state according to the animation
		requestRef.current = requestAnimationFrame(animate);
	}, [selectedCars, trackLength]);

	useEffect(() => {
		if (isActive) {
			requestRef.current = requestAnimationFrame(animate);

			return () => cancelAnimationFrame(requestRef.current);
		}
	}, [animate, isActive]);

	return (
		<>
			<DistanceMeter />
			<Tracks>
				<TrackGrid />
				<TracksContainer>
					{selectedCars.map((car) => (
						<Track key={car.name}>
							<CarImage
								src={car.image}
								alt={car.name}
								speed={car.speed}
								style={{
									left: `${carPositions[car.id] || 0}%`,
								}}
								// added a style here because passing it as a prop to styled component
								// generates too many classes
							/>
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
