import { useState } from "react";

function NavBar({ pokemonIndex, setPokemonIndex }) {
  const previous = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const next = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      <div>
        <button onClick={previous}>Précédent</button>
        <button onClick={next}>Suivant</button>
      </div>
    </>
  );
}

export default NavBar;
