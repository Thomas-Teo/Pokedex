import { pokemonHp } from './fieldSelector.js';
import { pokemonAttack } from './fieldSelector.js';
import { pokemonDefense } from './fieldSelector.js';
import { pokemonSpeed } from './fieldSelector.js';

export async function renderStats(stats) {
  pokemonHp.innerHTML = stats['0']['base_stat'];
  pokemonAttack.innerHTML = stats['1']['base_stat'];
  pokemonDefense.innerHTML = stats['2']['base_stat'];
  pokemonSpeed.innerHTML = stats['3']['base_stat'];
}
