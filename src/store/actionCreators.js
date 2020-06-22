import * as ACTIONS from "./actions";

export const addCarToTestScale = (car) => ({
	type: ACTIONS.ADD_CAR,
	car,
});
