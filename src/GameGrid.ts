import type { Player } from './Player';
import { ZERO, type Vector2, add, subtract } from './Vector2';

export interface GridCell {
	readonly player: Player;
}

export class GameGrid {
	private readonly cells: GridCell[][];
	private lastStone: Vector2 = ZERO;

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
		if (column < 0 || column >= this.columns || this.cells[column].length === this.rows) {
			throw new Error('Column out of range or already occupied.');
		}

		const row = this.cells[column].push({ player }) - 1;
		this.lastStone = [ column, row ];
	}

	public hasConnected(minLength: number) {
		const directions: readonly Vector2[] = [
			[ 1, 0 ],
			[ 0, 1 ],
			[ 1, 1 ],
			[ 1, -1 ]
		];

		const { player } = this.cells[this.lastStone[0]][this.lastStone[1]];
		for (const direction of directions) {
			let last = this.lastStone;
			let connectedCount = 1;

			do {
				last = add(last, direction);
			}
			while (this.getStone(last)?.player === player && ++connectedCount <= minLength);

			if (connectedCount >= minLength) {
				return 'Game end me';
			}

			connectedCount = 1;
			do {
				last = subtract(last, direction);
			}
			while (this.getStone(last)?.player === player && ++connectedCount <= minLength);

			if (connectedCount >= minLength) {
				return 'Game end me';
			}
		}

		return false;
	}

	private getStone(coordinates: Vector2) {
		if (coordinates[0] < 0 || coordinates[0] >= this.columns) {
			return null;
		}

		const column = this.cells[coordinates[0]];
		if (coordinates[1] < 0 || coordinates[1] >= column.length) {
			return null;
		}

		return column[coordinates[1]];
	}
}
