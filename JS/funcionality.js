const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonBackground = document.querySelector('.pokemon__background');
const pokemonHeight = document.querySelector('.pokemon__height');
const pokemonType = document.querySelector('.pokemon__type');
const pokemonTypeTwo = document.querySelector('.pokemon__type_two');
const pokemonTypeIcon = document.querySelector('.pokemon__type_icon');
const pokemonTypeIconTwo = document.querySelector('.pokemon__type_icon_two');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

const pokemonHp = document.querySelector('.pokemon__hp');
const pokemonAttack = document.querySelector('.pokemon__attack');
const pokemonDefense = document.querySelector('.pokemon__defense');
const pokemonSpeed = document.querySelector('.pokemon__speed');

const pokemonAbilityOne = document.querySelector('.pokemon__ability_one');
const pokemonAbilityTwo = document.querySelector('.pokemon__ability_two');
const pokemonAbilityThree = document.querySelector('.pokemon__ability_three');
const pokemonAbilityFour = document.querySelector('.pokemon__ability_four');

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
  pokemonType.innerHTML = '';
  pokemonTypeTwo.innerHTML = '';

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

    if (types === 1) {
      pokemonType.innerHTML = data['types']['0']['type']['name'];
    } else if (types === 2) {
      pokemonType.innerHTML = data['types']['0']['type']['name'];
      pokemonTypeTwo.innerHTML = data['types']['1']['type']['name'];
    }

    let abilities = data.abilities.length;

    if (abilities === 1) {
      pokemonAbilityOne.innerHTML = data['abilities']['0']['ability']['name'];
    } else if (abilities === 2) {
      pokemonAbilityOne.innerHTML = data['abilities']['0']['ability']['name'];
      pokemonAbilityTwo.innerHTML = data['abilities']['1']['ability']['name'];
    } else if (abilities === 3) {
      pokemonAbilityOne.innerHTML = data['abilities']['0']['ability']['name'];
      pokemonAbilityTwo.innerHTML = data['abilities']['1']['ability']['name'];
      pokemonAbilityThree.innerHTML = data['abilities']['2']['ability']['name'];
    } else if (abilities === 4) {
      pokemonAbilityOne.innerHTML = data['abilities']['0']['ability']['name'];
      pokemonAbilityTwo.innerHTML = data['abilities']['1']['ability']['name'];
      pokemonAbilityThree.innerHTML = data['abilities']['2']['ability']['name'];
      pokemonAbilityFour.innerHTML = data['abilities']['3']['ability']['name'];
    }

    renderBackground(pokemonType.innerHTML);
    renderIcon(pokemonType.innerHTML, pokemonTypeTwo.innerHTML);
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonHp.innerHTML = '0';
    pokemonAttack.innerHTML = '0';
    pokemonDefense.innerHTML = '0';
    pokemonSpeed.innerHTML = '0';
    pokemonHeight.innerHTML = '0';
    pokemonAbilityOne.innerHTML = '';
    pokemonAbilityTwo.innerHTML = '';
    pokemonAbilityThree.innerHTML = '';
    pokemonAbilityFour.innerHTML = '';
    pokemonName.innerHTML = 'No results';
    pokemonNumber.innerHTML = '000';
    pokemonImage.src = './images/semPokemon.png';
    pokemonBackground.src = `./backgrounds/normal_bg.png`;
    pokemonTypeIconTwo.src = '';
    pokemonTypeIcon.src = `./icons/sem_icon.png`;
    input.value = '';
  }
};

const renderBackground = async (data) => {
  const type = await data;

  pokemonBackground.src = `./backgrounds/${type}_bg.png`;
};

const renderIcon = async (data, data_two) => {
  if (data_two) {
    const element_two = await data_two;

    pokemonTypeIconTwo.src = `./icons/${element_two}.png`;
  }
  const element = await data;

  pokemonTypeIcon.src = `./icons/${element}.png`;
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

/*Math.floor(Math.random() * 10)*/
