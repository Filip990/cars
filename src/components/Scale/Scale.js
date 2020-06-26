import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import DistanceMeter from "../DistanceMeter/DistanceMeter";
import SpeedLimit from "../SpeedLimit/SpeedLimit";
import TrackGrid from "../TrackGrid/TrackGrid";

import {
	Tracks,
	TracksContainer,
	Track,
	CarImage,
	Limits,
	LimitLine,
} from "./Scale.styled";

const Scale = () => {
	const { selectedCars, distance, speedLimits } = useSelector((state) => state);
	const [carPositions, setCarPositions] = useState({});
	const [isActive, setActive] = useState(false);

	// useRef is here, not to be attached to the DOM, but because changing it's "current" property
	// won't trigger the re-render
	const requestRef = useRef(null);

	const trackLength = distance * 9;

	const animate = useCallback(() => {
		setCarPositions((prevPositions) =>
			selectedCars.reduce((acc, car) => {
				// initial speed limit is equal to the speed of the car
				let speedLimit = car.speed;

				speedLimits.forEach((limit) => {
					// if cars position is on the limit's position and it's area, speed limit is updated
					if (prevPositions[car.id] >= limit.position) speedLimit = limit.speed;
				});

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
	}, [selectedCars, speedLimits, trackLength]);

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
				<Limits>
					{speedLimits.map(({ position, speed }) => (
						<div key={position}>
							<LimitLine position={position} />
							<SpeedLimit limit={speed} position={position} />
						</div>
					))}
				</Limits>
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
