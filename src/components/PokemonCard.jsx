import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const { name, imgSrc } = pokemon;
  /* prend {name} et {imgSrc} dans pokemon={pokemonList[0]} */

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired /* Name est requis */,
      imgSrc: PropTypes.string /* imgSrc est "connu" comme string */,
    }).isRequired /*shape est requis */,
  };

  return (
    <div>
      <figure>
        {imgSrc ? <img src={imgSrc}></img> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
