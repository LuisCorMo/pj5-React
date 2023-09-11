import { Link } from "react-router-dom";
import { logout } from "../../store/slices/trainer.slice";
import { useDispatch } from "react-redux";

const Footer = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <section className="w-screen min-w-[375px]">
      <div className="h-12 bg-[#FF6B57]">
        <button
          onClick={handleLogout}
          className="w-[64px] h-auto sm:w-[64px] absolute right-0 hover:animate-[pulse_1s_infinite] cursor-pointer"
        >
          <img src="/images/pokeball.png" alt="" />
          <img
            className="absolute right-[3%] top-[2.4rem] bg-red-600 aspect-square rounded-full"
            src="/images/logoutCircle.png"
            alt=""
          />
        </button>

        <section className="w-[180px]">
          <Link to="/pokedex" onClick={() => setCurrentPage(1)}>
            <img
              className="w-[150px] h-auto sm:w-[180px]"
              src="/images/logoPoke.png"
              alt=""
            />
          </Link>
        </section>
      </div>
      <div className="h-[6px] bg-[#423B3B]"></div>
    </section>
  );
};
export default Footer;
