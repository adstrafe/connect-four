import type { GameGrid } from './GameGrid';
import type { Player } from './Player';

export class Game {
	public constructor(
		public player1: Player,
		public player2: Player,
		public grid: GameGrid
	) {
		this.player1.color = 'blue';
		this.player2.color = 'red';
	}

	public get currentPlayer(): Player {
		// return the player whose turn it is now
		// should alternate between player1 and player2 until the game ends

	}

	public dropStone(column: number) {
		// TODO: Get player whose turn it is
		this.grid.dropStone(column);
	}
}
