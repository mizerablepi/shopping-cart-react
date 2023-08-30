import { Link } from "react-router-dom";

export default function HomeItemCard({ img, title, link }) {
  return (
    <div className="relative">
      <img src={img} className="" />
      <Link
        to={link}
        className="absolute top-2/3 w-2/4 mx-[25%] text-lg bg-white opacity-90 py-3 transition-all hover:opacity-100 hover:scale-105 duration-300 text-center"
      >
        {title}
      </Link>
    </div>
  );
}
