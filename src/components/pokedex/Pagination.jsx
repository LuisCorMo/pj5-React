const INITIAL_PAGE = 1;

const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
  ITEMS_PER_PAGE,
  pokemonByName,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= INITIAL_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setCurrentPage(INITIAL_PAGE);

  return (
    <ul className="mt-10 mb-8 text-center flex  justify-center items-center gap-2">
      {currentPage >= 3 && (
        <li className="cursor-pointer" onClick={handleFirstPage}>
          {"<<"}
        </li>
      )}
      {currentPage >= 2 && (
        <li className="cursor-pointer" onClick={handlePrevPage}>
          {"<"}
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`cursor-pointer h-[35px] grid items-center aspect-square border${
            currentPage == page ? "font-medium bg-red-600 text-white" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {pokemonByName.length > ITEMS_PER_PAGE && (
        <li className="cursor-pointer" onClick={handleNextPage}>
          {">"}
        </li>
      )}
      {pokemonByName.length > ITEMS_PER_PAGE && (
        <li className="cursor-pointer" onClick={handleLastPage}>
          {">>"}
        </li>
      )}
    </ul>
  );
};
export default Pagination;
