import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemons";
import StatsList from "./StatsList";
import {
  bgStylePokeType,
  borderStylePokeType,
  textStylePokeType,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const [isSmallImage, setIsSmallImage] = useState(false);

  const handleImageLoad = (event) => {
    const { naturalHeight } = event.target;
    if (naturalHeight <= 60) {
      setIsSmallImage(true);
    }
  };

  return (
    <Link
      to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center capitalize border-[6px] border-gradient-to-b rounded-lg max-w-[340px] ${
        borderStylePokeType[pokemonInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px] bg-gradient-to-b relative mb-8 ${
          bgStylePokeType[pokemonInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-auto">
          <img
            className={`object-contain ${
              isSmallImage ? "h-[70px] w-full" : "h-[100px] w-full"
            }`}
            src={pokemonInfo?.image}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
      </header>
      <section>
        <h3
          className={`text-lg font-bold ${
            textStylePokeType[pokemonInfo?.types[0]]
          }`}
        >
          {pokemonInfo?.name}
        </h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatsList stats={pokemonInfo?.stats} types={pokemonInfo?.types} />
      </section>
    </Link>
  );
};
export default PokemonCard;
