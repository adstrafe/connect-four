import type { GameGrid } from './GameGrid';
import type { Player } from './Player';
import type { RoundController } from './RoundController';

export class Game {
	public constructor(
		public player1: Player,
		public player2: Player,
		public grid: GameGrid,
		public rc: RoundController
	) {
		// TODO: names should be an input from players
		this.player1.name = 'Player1';
		this.player2.name = 'Player2';
		this.rc.roundCount = 0;
	}

	public dropStone(column: number) {
		this.grid.dropStone(this.rc.playerTurn([ this.player1, this.player2 ]), column);
		this.rc.nextRound();
	}
}
