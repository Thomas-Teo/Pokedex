const pokemonBackground = document.querySelector('.pokemon__background');

export async function renderBackground(data) {
  const type = await data;

  pokemonBackground.src = `./backgrounds/${type}_bg.png`;
}
