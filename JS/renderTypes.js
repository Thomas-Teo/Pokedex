import { pokemonType } from './fieldSelector.js';
import { renderBackground } from './renderBackground.js';
import { renderIcon } from './renderIcon.js';
import { pokemonTypeTwo } from './fieldSelector.js';

export async function renderTypes(types) {
  let typesLength = types.length;

  pokemonTypeTwo.style.display = 'none';
  pokemonTypeTwo.innerHTML = '';

  pokemonType.innerHTML = types['0']['type']['name'];

  if (typesLength > 1) {
    pokemonTypeTwo.innerHTML = types['1']['type']['name'];
    pokemonTypeTwo.style.display = '';
  }

  renderBackground(pokemonType.innerHTML);
  renderIcon(pokemonType.innerHTML, pokemonTypeTwo.innerHTML);
}
