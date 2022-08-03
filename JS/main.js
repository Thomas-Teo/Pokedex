// Fields
import { pokemonNumber } from './fieldSelector.js';
import { pokemonName } from './fieldSelector.js';
import { pokemonImage } from './fieldSelector.js';

import { form } from './fieldSelector.js';
import { input } from './fieldSelector.js';
import { buttonNext } from './fieldSelector.js';
import { buttonPrev } from './fieldSelector.js';

import { pokemonHeight } from './fieldSelector.js';
// Renders
import { renderStats } from './renderStats.js';
import { renderTypes } from './renderTypes.js';
import { renderAbility } from './renderAbility.js';
import { renderMoves } from './renderMoves.js';
import { nonePokemon } from './nonePokemon.js';

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemonData = async (pokemonSearch) => {
  pokemonName.innerHTML = 'Loading...';

  const data = await fetchPokemon(pokemonSearch);

  if (data) {
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    pokemonImage.src =
      data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonHeight.innerHTML = data.height;

    renderStats(data.stats);
    renderTypes(data.types);
    renderAbility(data.abilities);
    renderMoves(data.moves);
    input.value = '';
    searchPokemon = data.id;
  } else {
    nonePokemon();
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemonData(input.value.toLowerCase());
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemonData(searchPokemon);
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemonData(searchPokemon);
  }
});
renderPokemonData(searchPokemon);
