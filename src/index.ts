import { Game } from './Game';
import { GameGrid } from './GameGrid';
import { Player } from './Player';

const player1 = new Player();
const player2 = new Player();
const gameGrid = new GameGrid();

const game = new Game(player1, player2, gameGrid);
