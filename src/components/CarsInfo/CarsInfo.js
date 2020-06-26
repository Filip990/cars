import React, { useState } from "react";
import { useSelector } from "react-redux";

import Car from "../Car/Car";

import { Container, SearchInput, NoResults } from "./CarsInfo.styled";

const CarsInfo = () => {
	const { cars } = useSelector((state) => state);
	const [searchTerm, setSearchTerm] = useState("");

	const updateSearchTerm = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredCars = cars.filter((car) => {
		return car.name.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<>
			<SearchInput
				value={searchTerm}
				type="search"
				onChange={updateSearchTerm}
				placeholder="Search"
			/>
			<Container>
				{filteredCars.map((car) => (
					<Car key={car.id} {...car} />
				))}
			</Container>
			{filteredCars.length === 0 && <NoResults>No Results</NoResults>}
		</>
	);
};

export default CarsInfo;
