const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;
const colors = {
  fire: "#1e1e1e",
  grass: "#1e1e1e",
  electric: "#1e1e1e",
  water: "#1e1e1e",
  ground: "#1e1e1e",
  rock: "#1e1e1e",
  fairy: "#1e1e1e",
  poison: "#1e1e1e",
  bug: "#1e1e1e",
  dragon: "#1e1e1e",
  psychic: "#1e1e1e",
  flying: "#1e1e1e",
  fighting: "#1e1e1e",
  normal: "#1e1e1e",
};
const mainTypes = Object.keys(colors);

const createPokemonCard = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");
  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];
  pokemonElement.style.backgroundColor = color;
  const pokemonInnerHTML = `
    <div class="img-container">
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
            alt=""
        />
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
  pokemonElement.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonElement);
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const fetchPokemons = async () => {
  for (let i = 1; i < pokemonCount; i++) {
    await getPokemon(i);
  }
};

fetchPokemons();
