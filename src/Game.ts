import type { GameGrid } from './GameGrid';
import type { Player } from './Player';

export class Game {
	public constructor(
		public player1: Player,
		public player2: Player,
		public grid: GameGrid
	) {}

	public get currentPlayer(): Player {
		// return the player whose turn it is now
		// should alternate between player1 and player2 until the game ends
	}

	public dropStone(column: number) {
		// attempt to drop stone via our grid
		// check whether there are any connections made now
		// announce a winner if there are
	}
}
