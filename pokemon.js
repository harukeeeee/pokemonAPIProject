const pokemonImageNode = document.querySelector(".pokemon-image");
const pokemonNameTitleNode = document.querySelector(".pokemon-name-title");
const pokemonInputNode = document.querySelector(".pokemon-input");
const searchButtonNde = document.querySelector(".button-search");
const backButtonNode = document.querySelector(".button-back");
const nextButtonNode = document.querySelector(".button-next");
const heightPokemonNode = document.querySelector(".height-pokemon");
const weightPokemonNode = document.querySelector(".weight-pokemon");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
let url = "";
let id = 0;

function pokemonRender(data) {
  pokemonNameTitleNode.innerHTML =
    data.name[0].toUpperCase() + data.name.slice(1);
  pokemonImageNode.src = data.sprites.front_default;
  heightPokemonNode.innerHTML = `height: ${data.height}`;
  weightPokemonNode.innerHTML = `weight: ${data.weight}`;
}

searchButtonNde.addEventListener("click", function () {
  url = baseUrl + pokemonInputNode.value;
  fetch(url)
    .then((data) => data.json())
    .then((info) => {
      console.log(info);
      pokemonRender(info);
      id = info.id;
    });
});

backButtonNode.addEventListener("click", function () {
  id--;
  url = baseUrl + id;
  fetch(url)
    .then((data) => data.json())
    .then((info) => {
      pokemonRender(info);
    });
});

nextButtonNode.addEventListener("click", function () {
  id++;
  url = baseUrl + id;
  fetch(url)
    .then((data) => data.json())
    .then((info) => {
      pokemonRender(info);
    });
});

// abilities
// :
// (2) [{…}, {…}]
// base_experience
// :
// 112
// cries
// :
// {latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg', legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg'}
// forms
// :
// [{…}]
// game_indices
// :
// (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height
// :
// 4
// held_items
// :
// (2) [{…}, {…}]
// id
// :
// 25
// is_default
// :
// true
// location_area_encounters
// :
// "https://pokeapi.co/api/v2/pokemon/25/encounters"
// moves
// :
// (105) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// name
// :
// "pikachu"
// order
// :
// 35
// past_abilities
// :
// []
// past_types
// :
// []
// species
// :
// {name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-species/25/'}
// sprites
// :
// {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png', back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png', back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png', back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png', front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', …}
// stats
// :
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types
// :
// [{…}]
// weight
// :
// 60
