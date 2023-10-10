function PokemonCard(props) {
  console.log(props);

  return (
    <div>
      <figure>
        {/*Si pokemon.imgSrc, alors mettre image sinon afficher ??? */}
        {props.pokemon.imgSrc ? (
          <img src={props.pokemon.imgSrc}></img>
        ) : (
          <p>???</p>
        )}
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
