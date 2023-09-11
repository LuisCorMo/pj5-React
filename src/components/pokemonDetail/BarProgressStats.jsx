const BarProgressStats = ({ stat }) => {
  const getPercentBarProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percent = (100 * statValue) / MAX_STAT_VALUE;
    return `${percent}%`;
  };
  return (
    <article>
      <section className="flex justify-between px-1 font-medium">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-slate-300 rounded-lg">
        <div
          className="h-full bg-gradient-to-r from-[#f59b15] to-[#ffd106ea] rounded-lg"
          style={{ width: getPercentBarProgress(stat.value) }}
        ></div>
      </div>
    </article>
  );
};
export default BarProgressStats;
