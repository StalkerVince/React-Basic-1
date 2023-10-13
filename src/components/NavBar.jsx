function NavBar({ pokemonList, setPokemonIndex }) {
  const button = (e) => {
    setPokemonIndex(pokemonList.indexOf(e));
  };
  return (
    <>
      <div>
        {pokemonList.map((e) => (
          <button key={e.name} onClick={() => button(e)}>
            {e.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default NavBar;
