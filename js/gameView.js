export default class GameView {
  constructor() {
    console.log('GameView Init');
  }
  updateBoard(game) {
    //console.log('gameview', game.board);
    for (let i = 0; i < game.board.length; i++) {
      console.log(game.board[i]);
      let tile = document.querySelector(`.board-tile[data-index='${i}']`);
      //console.log(tile);
      tile.textContent = game.board[i];
    }
  }
}
