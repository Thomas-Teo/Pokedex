import { pokemonHp } from './fieldSelector.js';
import { pokemonName } from './fieldSelector.js';
import { pokemonNumber } from './fieldSelector.js';
import { pokemonImage } from './fieldSelector.js';
import { pokemonAttack } from './fieldSelector.js';
import { pokemonDefense } from './fieldSelector.js';
import { pokemonSpeed } from './fieldSelector.js';
import { pokemonHeight } from './fieldSelector.js';
import { pokemonAbilityOne } from './fieldSelector.js';
import { pokemonAbilityTwo } from './fieldSelector.js';
import { pokemonAbilityThree } from './fieldSelector.js';
import { pokemonAbilityFour } from './fieldSelector.js';
import { pokemonBackground } from './fieldSelector.js';
import { pokemonTypeIcon } from './fieldSelector.js';
import { pokemonTypeIconTwo } from './fieldSelector.js';
import { input } from './fieldSelector.js';

export function nonePokemon() {
  (pokemonHp.innerHTML = '0'),
    (pokemonAttack.innerHTML = '0'),
    (pokemonDefense.innerHTML = '0'),
    (pokemonSpeed.innerHTML = '0'),
    (pokemonHeight.innerHTML = '0'),
    (pokemonAbilityOne.innerHTML = ''),
    (pokemonAbilityTwo.innerHTML = ''),
    (pokemonAbilityThree.innerHTML = ''),
    (pokemonAbilityFour.innerHTML = ''),
    (pokemonName.innerHTML = 'No results'),
    (pokemonNumber.innerHTML = '000'),
    (pokemonImage.src = './images/semPokemon.png'),
    (pokemonBackground.src = `./backgrounds/normal_bg.png`),
    (pokemonTypeIconTwo.src = ''),
    (pokemonTypeIcon.src = `./icons/sem_icon.png`),
    (input.value = '');
}
