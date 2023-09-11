import { textStylePokeType } from "../../shared/pokemon";

const StatsList = ({ stats, types }) => {
  return (
    <ul className="grid gap-2 grid-cols-2 text-xs p-2">
      {stats?.map((stats) => (
        <li key={stats.name}>
          <h4 className="capitalize font-bold">{stats.name}</h4>
          <span className={`font-bold ${textStylePokeType[types[0]]}`}>
            {stats.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
export default StatsList;
