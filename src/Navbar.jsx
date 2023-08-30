import ItemCount from "./ItemCount";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ itemsInCart = 0 }) {
  const { pathname } = useLocation();
  const section = pathname;
  const regex = new RegExp("/shop*");
  return (
    <nav className="flex justify-between items-center px-28 py-6 shadow-md sticky top-0 bg-white z-10">
      <div className="font-bold text-yellow-400 text-3xl">sahara</div>
      <div>
        <Link
          to={""}
          className={`mr-10 pb-1.5 ${
            section === "/" ? "border-yellow-400 border-b-4" : ""
          }`}
        >
          Home
        </Link>{" "}
        <Link
          to={"shop"}
          className={`pb-1.5 ${
            regex.test(section) ? "border-b-4 border-yellow-400 " : ""
          }`}
        >
          Shop
        </Link>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center relative">
          <ItemCount count={itemsInCart} />{" "}
        </div>
        <button className="bg-yellow-400 text-white font-bold rounded px-3 py-0.5">
          Login
        </button>
      </div>
    </nav>
  );
}
