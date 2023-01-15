import Game from './game.js';
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();
/*gameView.updateBoard(game);
game.nextTurn();
console.log('turn', game.turn);
game.playerMove(4);
console.log('board', game.board);
gameView.updateBoard(game);*/

let tiles = document.querySelectorAll('.board-tile');
//console.log(tiles);
tiles.forEach((tile) => {
  //console.log(tile);
  tile.addEventListener('click', () => {
    console.log('tile clicked');
    gameView.updateBoard(game);
  });
});
