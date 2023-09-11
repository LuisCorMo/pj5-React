import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonByName,
    setPokemonName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock, ITEMS_PER_PAGE } =
    paginateData(pokemonByName, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonName, pokemonType]);

  return (
    <main>
      <Footer setCurrentPage={setCurrentPage} />
      <section className="px-4 mb-10 mt-14">
        <p className="font-semibold text-lg">
          <span className="capitalize text-2xl text-red-600">
            Welcome "{name}"
          </span>
          , search your favorite Pokemon.
        </p>
        <form className="flex my-4 gap-6">
          <div className="shadow-2xl border rounded-lg p-1 px-1 w-[200px] text-center sm:w-[340px] sm:px-4">
            <input
              className="outline-none text-center w-full"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search Pokemon ..."
              type="text"
            />
          </div>

          <select
            className="shadow-2xl border rounded-md p-1 w-[128px] sm:w-[200px]"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All Pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <PokemonList pokemons={itemsInCurrentPage} />

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        pokemonByName={pokemonByName}
      />
    </main>
  );
};
export default Pokedex;
