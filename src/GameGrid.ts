import type { Player } from './Player';

export interface GridCell {
	index?: number;
	isOccupied: boolean;
	player?: Player;
}

export class GameGrid {
	private readonly cells: GridCell[][];

	public constructor(
		public readonly rows = 6,
		public readonly columns = 7
	) {
		const cells = new Array<GridCell[]>(columns);
		for (let c = 0; c < columns; ++c) {
			cells[c] = [];
		}

		this.cells = cells;
	}

	public dropStone(player: Player, column: number) {
		// check that column is in range
		// check that column is not full
		// push in the cell
	}

	public hasConnected(minLength: number) {
		// go through all the cells
		// find connecting lines of stones from the same player of length at least minLength
		// search in all valid directions (horizontal, vertical, and both diagonals)
	}
}
