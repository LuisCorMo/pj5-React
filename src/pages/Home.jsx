import { useDispatch } from "react-redux";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gamePoke bg-no-repeat bg-[length:1000px_700px] sm:bg-cover">
      <section className="bg-white/50 border-8 border-black rounded-3xl text-center min-w-[310px] min-h-[520px] grid items-center relative sm: w-3/4">
        <article>
          <div className="absolute -top-[68px] left-1/2 -translate-x-1/2 min-w-[220px] sm:-top-[86px]">
            <img className="w-[280px]" src="/images/logoPoke.png" alt="" />
          </div>
          <h2 className="text-2xl font-bold py-6">Hello Trainer!</h2>
          <form
            onSubmit={hanldeSubmit}
            className="flex flex-col items-center m-4"
          >
            <input
              className="border-[1px] border-cyan-900 rounded-lg p-2 px-4 min-w-[250px] text-center sm:w-[340px]"
              autoComplete="off"
              placeholder="Give me your Name to start . . ."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="p-2 m-6 bg-red-600 text-white rounded-lg w-[120px]">
              Let's GO!
            </button>
          </form>
        </article>
      </section>
      <div className="absolute right-0 bottom-3">
        <img
          className="w-[132px] h-auto sm:w-[220px]"
          src="/images/pokeball.png"
          alt=""
        />
      </div>
    </main>
  );
};
export default Home;
