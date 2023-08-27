import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  const dummy = 10;
  return (
    <>
      <Navbar itemsInCart={dummy} />
      <Outlet />
    </>
  );
}
