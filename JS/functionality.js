// Fields
import { pokemonNumber } from './fieldSelector.js';
import { pokemonName } from './fieldSelector.js';
import { pokemonImage } from './fieldSelector.js';

import { pokemonType } from './fieldSelector.js';
import { pokemonTypeTwo } from './fieldSelector.js';

import { pokemonHp } from './fieldSelector.js';
import { pokemonAttack } from './fieldSelector.js';
import { pokemonDefense } from './fieldSelector.js';
import { pokemonSpeed } from './fieldSelector.js';
import { pokemonHeight } from './fieldSelector.js';

import { pokemonAbilityOne } from './fieldSelector.js';
import { pokemonAbilityTwo } from './fieldSelector.js';
import { pokemonAbilityThree } from './fieldSelector.js';
import { pokemonAbilityFour } from './fieldSelector.js';

import { form } from './fieldSelector.js';
import { input } from './fieldSelector.js';
import { buttonNext } from './fieldSelector.js';
import { buttonPrev } from './fieldSelector.js';
// Renders
import { renderIcon } from './renderIcon.js';
import { renderBackground } from './renderBackground.js';
import { nonePokemon } from './nonePokemon.js';
import { randomNumbers } from './randomNumbers.js';

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemonSearch) => {
  pokemonName.innerHTML = 'Loading...';
  nonePokemon();

  const data = await fetchPokemon(pokemonSearch);

  if (data) {
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    pokemonImage.src =
      data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    pokemonHp.innerHTML = data['stats']['0']['base_stat'];
    pokemonAttack.innerHTML = data['stats']['1']['base_stat'];
    pokemonDefense.innerHTML = data['stats']['2']['base_stat'];
    pokemonSpeed.innerHTML = data['stats']['3']['base_stat'];
    pokemonHeight.innerHTML = data.height;

    let types = data.types.length;
    if (types > 0) {
      pokemonType.innerHTML = data['types']['0']['type']['name'];
    }
    if (types > 1) {
      pokemonTypeTwo.innerHTML = data['types']['1']['type']['name'];
    }

    let abilities = data.abilities.length;
    if (abilities > 0) {
      pokemonAbilityOne.innerHTML = data['abilities']['0']['ability']['name'];
    }
    if (abilities > 1) {
      pokemonAbilityTwo.innerHTML = data['abilities']['1']['ability']['name'];
    }
    if (abilities > 2) {
      pokemonAbilityThree.innerHTML = data['abilities']['2']['ability']['name'];
    }
    if (abilities > 3) {
      pokemonAbilityFour.innerHTML = data['abilities']['3']['ability']['name'];
    }

    let moves = data.moves.length;
    /*randomNumbers(moves);*/
    console.log(randomNumbers(moves));

    renderBackground(pokemonType.innerHTML);
    renderIcon(pokemonType.innerHTML, pokemonTypeTwo.innerHTML);
    input.value = '';
    searchPokemon = data.id;
  } else {
    nonePokemon();
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

renderPokemon(searchPokemon);
