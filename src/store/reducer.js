import produce from "immer";
import data from "../data/data.json";

import * as ACTIONS from "./actions";

const initialState = {
	cars: data.cars,
	distance: data.distance,
	speedLimits: data.speed_limits,
	trafficLights: data.traffic_lights,
	selectedCars: [],
};

const AppReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ACTIONS.ADD_CAR:
				// prevent duplicates and more than 3 elements
				if (
					!draft.selectedCars.some((car) => car.name === action.car.name) &&
					draft.selectedCars.length !== 3
				) {
					draft.selectedCars.push(action.car);
				}
				break;

			case ACTIONS.ADD_CAR_SUCCESS:
				// notify
				break;

			default:
				return state;
		}
	});
};

export default AppReducer;
