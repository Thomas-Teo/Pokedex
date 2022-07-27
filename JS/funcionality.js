const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonHeight = document.querySelector('.pokemon__height');
const pokemonType = document.querySelector('.pokemon__type');
const pokemonTypeIcon = document.querySelector('.pokemon__type_icon');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

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
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemonSearch);

  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonHeight.innerHTML = data.height;
    pokemonType.innerHTML = data['types']['0']['type']['name'];
    renderIcon(pokemonType.innerHTML);
    pokemonImage.src =
      data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonTypeIcon.src = `icons/${pokemonType}.png`;
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonName.innerHTML = 'No results';
    pokemonNumber.innerHTML = '000';
    pokemonImage.src = './images/semPokemon.png';
    input.value = '';
  }
};

const renderIcon = async (data) => {
  const element = await data;

  pokemonTypeIcon.src = `icons/${element}.png`;
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
