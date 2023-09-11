import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import Footer from "../components/layout/Footer";
import { bgStylePokeType } from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  const [isSmallImage, setIsSmallImage] = useState(false);

  const handleImageLoad = (event) => {
    const { naturalHeight } = event.target;
    if (naturalHeight < 60) {
      setIsSmallImage(true);
    }
  };

  return (
    <main className="flex flex-col text-center justify-center items-center capitalize mb-8 min-w-[375px] bg-gradient-to-b">
      <Footer />
      <section className="w-[min(100%,_500px)] mt-14 shadow-2xl border rounded">
        <article className="mb-8">
          <header
            className={`h-[80px] rounded-t-md mb-8 bg-gradient-to-b relative ${
              bgStylePokeType[pokemonData?.types[0]]
            }`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-auto">
              <img
                className={`object-contain ${
                  isSmallImage ? "h-[64px] w-full" : "w-[100px]"
                }`}
                src={pokemonData?.image}
                alt=""
                onLoad={handleImageLoad}
              />
            </div>
          </header>
          <section className="flex flex-col font-semibold text-xl">
            <span className="border shadow-lg w-10 m-auto">
              #{pokemonData?.id}
            </span>
            <div className="relative m-4">
              <span className="absolute top-[58%] left-[64%] w-1/4 h-[1px] bg-gray-400"></span>
              <span>{pokemonData?.name}</span>
              <span className="absolute top-[58%] right-[64%] w-1/4 h-[1px] bg-gray-400"></span>
            </div>
            <section className="flex justify-center items-center gap-3 text-[10px]/[16px] mb-2 font-normal">
              <div>
                <h3>height</h3>
                <span className="font-bold text-xs">{pokemonData?.height}</span>
              </div>
              <div>
                <h3>weight</h3>
                <span className="font-bold text-xs">{pokemonData?.weight}</span>
              </div>
            </section>
          </section>
          <section className="grid grid-cols-2 font-medium px-6 text-sm mb-6">
            <div>
              <h4 className="mb-4">Type</h4>
              <section className="flex flex-row flex-wrap justify-center gap-2">
                {pokemonData?.types.map((type) => (
                  <h5
                    key={type}
                    className={`text-xs border rounded-md shadow-lg p-[6px] px-6 mx-1 ${bgStylePokeType[type]}`}
                  >
                    {type}
                  </h5>
                ))}
              </section>
            </div>
            <div>
              <h4 className="mb-4">Abilities</h4>
              <section className="flex flex-row flex-wrap justify-center gap-2">
                {pokemonData?.abilities.map((abilities) => (
                  <h5
                    key={abilities}
                    className="text-xs bg-blue-200 rounded-md flex items-center justify-center border shadow-lg p-[6px] mx-1"
                  >
                    {abilities}
                  </h5>
                ))}
              </section>
            </div>
          </section>
          <StatBarList stats={pokemonData?.stats} />
        </article>
      </section>
      <section className="w-[min(100%,_500px)] mt-14 shadow-2xl border rounded">
        <section className="relative mt-5 mb-2">
          <h2 className="font-semibold text-left text-xl mx-8">Moves</h2>
          <span className="absolute top-[58%] right-[23%] w-[50%] h-[1px] bg-gray-400"></span>
          <img
            className="w-[50px] h-auto bg-black/10 absolute right-[8%] -top-[34%] rounded-full"
            src="/images/PokeWatermark.png"
            alt=""
          />
        </section>
        <article className="flex flex-row flex-wrap gap-2 p-4 mx-4 mb-6">
          {pokemonData?.moves.map((move) => (
            <h5
              key={move.move.name}
              className="text-xs p-[8px] rounded-full bg-gray-200"
            >
              {move.move.name}
            </h5>
          ))}
        </article>
      </section>
    </main>
  );
};
export default PokemonDetail;
