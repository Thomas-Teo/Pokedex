import { pokemonMoveOne } from './fieldSelector.js';
import { pokemonMoveTwo } from './fieldSelector.js';
import { pokemonMoveThree } from './fieldSelector.js';
import { pokemonMoveFour } from './fieldSelector.js';

export async function renderMoves(moves) {
  let movesLength = moves.length;
  pokemonMoveTwo.style.display = 'none';
  pokemonMoveThree.style.display = 'none';
  pokemonMoveFour.style.display = 'none';

  const random_numbers_0 = Math.floor(0 + Math.random() * (movesLength * 0.25));
  const random_numbers_1 = Math.floor(movesLength * 0.25 + Math.random() * (movesLength * 0.25));
  const random_numbers_2 = Math.floor(movesLength * 0.5 + Math.random() * (movesLength * 0.25));
  const random_numbers_3 = Math.floor(movesLength * 0.75 + Math.random() * movesLength * 0.25);

  pokemonMoveOne.innerHTML = moves[random_numbers_0]['move']['name'];
  if (movesLength > 1) {
    pokemonMoveTwo.innerHTML = moves[random_numbers_1]['move']['name'];
    pokemonMoveTwo.style.display = '';
  }
  if (movesLength > 2) {
    pokemonMoveThree.innerHTML = moves[random_numbers_2]['move']['name'];
    pokemonMoveThree.style.display = '';
  }
  if (movesLength > 3) {
    pokemonMoveFour.innerHTML = moves[random_numbers_3]['move']['name'];
    pokemonMoveFour.style.display = '';
  }
}
