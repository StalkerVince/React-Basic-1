import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const { name, imgSrc } = pokemon;

  PokemonCard.propTypes = {
    PokemonCard:
      PropTypes.shape[
        {
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
        }
      ],
  };

  return (
    <div>
      <figure>
        {/*Si pokemon.imgSrc, alors mettre image sinon afficher ??? */}
        {imgSrc ? <img src={imgSrc}></img> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
