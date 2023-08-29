import { Link, useOutletContext } from "react-router-dom";
import ShopItemCard from "./ShopItemCard";
import { useEffect, useState } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useOutletContext();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  function addItemHandler(item) {
    const newState = [...itemsInCart, item];
    setItemsInCart(newState);
  }

  return (
    <div className="flex justify-center mt-28">
      <div className="w-[max(60rem,80%)] max-w-7xl grid grid-cols-[1fr_3fr] gap-10">
        <aside className="min-w-max">
          <div className="mb-6 shadow">
            <div className="bg-amber-100 px-6 py-4">BROWSE CATEGORIES</div>
            <div className="mx-6 py-6 flex flex-col gap-2">
              <Link to="">Men&apos;s Wear</Link>
              <Link to="">Women&apos;s Wear</Link>
              <Link to="">Electronics</Link>
              <Link to="">Jewelry</Link>
            </div>
          </div>
          <div className="mb-6 shadow">
            <div className="bg-amber-100 px-6 py-4">BROWSE CATEGORIES</div>
            <div className="mx-6 py-6 flex flex-col gap-2">
              <Link to="">Men&apos;s Wear</Link>
              <Link to="">Women&apos;s Wear</Link>
              <Link to="">Electronics</Link>
              <Link to="">Jewelry</Link>
            </div>
          </div>
        </aside>
        <main className="p-4">
          <div>
            <h1 className="font-bold text-3xl">Women&apos;s (12)</h1>
          </div>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap justify-items-center gap-8">
            {items
              .filter((item) => item.category === "women's clothing")
              .map((item) => {
                return (
                  <ShopItemCard
                    key={item.id}
                    item={item}
                    addItemHandler={addItemHandler}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}
