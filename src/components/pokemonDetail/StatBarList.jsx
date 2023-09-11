import BarProgressStats from "./BarProgressStats";

const StatBarList = ({ stats }) => {
  return (
    <section>
      <div className="relative mb-2">
        <h2 className="text-xl font-semibold text-left mx-8">Stats</h2>
        <span className="absolute top-[58%] right-[23%] w-[54%] h-[1px] bg-gray-400"></span>
        <img
          className="w-[50px] h-auto bg-black/10 absolute right-[8%] -top-[34%] rounded-full"
          src="/images/PokeWatermark.png"
          alt=""
        />
      </div>
      <section className="px-8 py-2">
        {stats?.map((stat) => (
          <BarProgressStats key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;
