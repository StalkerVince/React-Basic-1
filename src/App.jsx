import { useState } from "react";
import "./App.css";
import "./components/PokemonCard.jsx";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  /* état par default de la page 
  défini sur l'index 0 du tableau */

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },

    {
      name: "mew",
      /* imgSrc est manquant ici (fait exprès) */
    },
  ];

  return (
    <div>
      <nav>
        <NavBar /* On récupère le return de Navbar */
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
          /* On envoie pokemonIndex et setPokemonIndex vers NavBar */
        />
      </nav>
      <PokemonCard
        pokemon={pokemonList[pokemonIndex]}
        /* pokemon=pokemonList[0] */
      />
    </div>
  );
}

export default App;
