import { pokemonAbilityOne } from './fieldSelector.js';
import { pokemonAbilityTwo } from './fieldSelector.js';
import { pokemonAbilityThree } from './fieldSelector.js';
import { pokemonAbilityFour } from './fieldSelector.js';

export async function renderAbility(abilities) {
  let abilitiesLength = abilities.length;
  pokemonAbilityOne.style.display = 'none';
  pokemonAbilityTwo.style.display = 'none';
  pokemonAbilityThree.style.display = 'none';
  pokemonAbilityFour.style.display = 'none';

  if (abilitiesLength > 0) {
    pokemonAbilityOne.innerHTML = abilities['0']['ability']['name'];
    pokemonAbilityOne.style.display = '';
  }
  if (abilitiesLength > 1) {
    pokemonAbilityTwo.innerHTML = abilities['1']['ability']['name'];
    pokemonAbilityTwo.style.display = '';
  }
  if (abilitiesLength > 2) {
    pokemonAbilityThree.innerHTML = abilities['2']['ability']['name'];
    pokemonAbilityThree.style.display = '';
  }
  if (abilitiesLength > 3) {
    pokemonAbilityFour.innerHTML = abilities['3']['ability']['name'];
    pokemonAbilityFour.style.display = '';
  }
}
