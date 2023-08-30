import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Root() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const itemsInCartCount = itemsInCart.length.toString();
  return (
    <>
      <Navbar itemsInCart={itemsInCartCount} />
      <Outlet context={[itemsInCart, setItemsInCart]} />
    </>
  );
}
