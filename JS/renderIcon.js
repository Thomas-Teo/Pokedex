import { pokemonTypeIcon } from './fieldSelector.js';
import { pokemonTypeIconTwo } from './fieldSelector.js';

export async function renderIcon(data, data_two) {
  const element = await data;

  pokemonTypeIcon.src = `./icons/${element}.png`;

  if (data_two) {
    const element_two = await data_two;

    pokemonTypeIconTwo.src = `./icons/${element_two}.png`;
  } else {
    pokemonTypeIconTwo.src = '';
  }
}
