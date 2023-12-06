import listadoPokemon from '../../mocks/pokemonList.json';
import Card from '../Card/Card';
import "./Contenido.css";



const Contenido = () => {
  const cardList = (
    listadoPokemon.results.map((pokemon, index) => (
      <Card key={index} pokemon={pokemon} />
    ))
  );
  return (
    <div className="contenido">
      {cardList}
    </div>
  );
};

export default Contenido;