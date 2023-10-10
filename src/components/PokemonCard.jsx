import './PokemonCard.css'

function PokemonCard() {

    const pokemon = pokemonList[1];

    return (
      <div>
        <figure>
            {pokemon.imgSrc? (<img class="avatar" src={pokemon.imgSrc}></img>) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
    
  }

const pokemonList = [

    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
        name: "mew",
    },
];

export default PokemonCard;