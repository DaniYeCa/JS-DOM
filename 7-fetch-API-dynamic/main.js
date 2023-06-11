const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchinput = document.querySelector('#pokemon-search');
const searchbuttom = document.querySelector('#search-button')
const pokemonContainer = document.querySelector('.pokemon-container')
let currentPokemonId = 25;
let currentPokemon;
let pokemonRequest = [];




const getPokemonTemplater = () => {
  return `
  <div class="pokemon"
  <h3>${currentPokemon.name}</h3>
  <span>ID: ${currentPokemon.id}</span>

  <img src="${currentPokemon.image}"alt="${currentPokemon.name}"
  </div>
  `
};

const renderPokemon = () => {
  const template = getPokemonTemplater()
  pokemonContainer.innerHTML += template
};


const fecthPokemon = () => {
  if (pokemonRequest.includes(currentPokemonId)) {
    return;
  } else {
    pokemonRequest.push(currentPokemonId);
  }
  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default
      };

      renderPokemon()
    });
};

const handleSearch = (event) => {
  const inputValue = searchinput.valueAsNumber;

  currentPokemonId = inputValue
  fecthPokemon();
}


searchinput.value = currentPokemonId;
fecthPokemon();
searchbuttom.addEventListener('click', handleSearch);