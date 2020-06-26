import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import DistanceMeter from "../DistanceMeter/DistanceMeter";
import SpeedLimit from "../SpeedLimit/SpeedLimit";
import TrafficLight from "../TrafficLight/TrafficLight";
import TrackGrid from "../TrackGrid/TrackGrid";

import {
	Tracks,
	TracksContainer,
	Track,
	CarImage,
	Limits,
	LimitLine,
	AnimationInput,
} from "./Scale.styled";

const Scale = () => {
	const { selectedCars, distance, speedLimits, trafficLights } = useSelector(
		(state) => state
	);
	const [carPositions, setCarPositions] = useState({});
	const [isActive, setActive] = useState(false);
	const [redLights, setRedLights] = useState({});
	const [animationSpeed, setAnimationSpeed] = useState(1);

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
					(prevPositions[car.id] || 0) +
					(speedLimit / trackLength) * animationSpeed;

				const redLightsOn = Object.entries(redLights).reduce(
					(acc, [position, isActive]) => {
						if (isActive) acc.push(+position);

						return acc;
					},
					[]
				);

				if (redLightsOn.includes(Math.floor(newCarPosition))) {
					newCarPosition = prevPositions[car.id];
				}

				return {
					...acc,
					[car.id]: newCarPosition > 90 ? 90 : newCarPosition,
				};
			}, {})
		);
		// Change the state according to the animation
		requestRef.current = requestAnimationFrame(animate);
	}, [animationSpeed, redLights, selectedCars, speedLimits, trackLength]);

	useEffect(() => {
		if (isActive) {
			requestRef.current = requestAnimationFrame(animate);

			return () => cancelAnimationFrame(requestRef.current);
		}
	}, [animate, isActive]);

	// Traffic Light
	useEffect(() => {
		const intervalIds = [];

		trafficLights.forEach(({ position, duration }) => {
			intervalIds.push(
				setInterval(() => {
					setRedLights((prevValues) => ({
						...prevValues,
						[position]: !prevValues[position],
					}));
				}, duration)
			);
		});

		return () =>
			intervalIds.forEach((id) => {
				clearInterval(id);
			});
	}, [trafficLights]);

	const updateAnimationSpeed = (e) => {
		const { value } = e.target;
		// prevent zero and negative numbers
		if (value >= 1) {
			setAnimationSpeed(value);
		}
	};

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
					{trafficLights.map(({ position }) => (
						<div key={position}>
							<LimitLine position={position} />
							<TrafficLight
								isRedActive={redLights[position]}
								key={position}
								position={position}
							/>
						</div>
					))}
				</Limits>
			</Tracks>

			<AnimationInput
				type="number"
				value={animationSpeed}
				onChange={updateAnimationSpeed}
			/>
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
