import React from "react";

import { Grid, GridRow, Cell } from "./TrackGrid.styled";

const gridItems = [...Array(10).keys()].map((i) => i + 1);

function TrackGrid() {
	return (
		<Grid>
			<GridRow>
				{gridItems.map((i) => (
					<Cell key={i} />
				))}
			</GridRow>
			<GridRow>
				{gridItems.map((i) => (
					<Cell key={i} />
				))}
			</GridRow>
			<GridRow>
				{gridItems.map((i) => (
					<Cell key={i} />
				))}
			</GridRow>
		</Grid>
	);
}

export default TrackGrid;
