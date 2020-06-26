import React from "react";

import { Sign } from "./SpeedLimit.styled.js";

function SpeedLimit({ limit, position }) {
	return <Sign position={position}>{limit}</Sign>;
}

export default SpeedLimit;
