import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const { name, imgSrc } = pokemon;

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
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
