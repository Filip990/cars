import React, { useState } from "react";
import { useSelector } from "react-redux";

import Car from "../Car/Car";

import { Container, SearchInput } from "./CarsInfo.styled";

const CarsInfo = () => {
	const { cars } = useSelector((state) => state);
	const [searchTerm, setSearchTerm] = useState("");

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredCars = cars.filter((car) => {
		return car.name.toLowerCase().includes(searchTerm);
	});

	return (
		<>
			<SearchInput
				value={searchTerm}
				type="search"
				onChange={handleInputChange}
				placeholder="Search"
			/>
			<Container>
				{filteredCars.map((car) => (
					<Car key={car.id} {...car} />
				))}
			</Container>
		</>
	);
};

export default CarsInfo;
