import type { Player } from './Player';

export class RoundController {
	public constructor(public readonly players: Player[], public roundCount: number) {}

	public nextRound() {
		++this.roundCount;
	}

	public playerTurn(players: Player[]): Player {
		return players[this.roundCount % this.players.length];
	}
}
