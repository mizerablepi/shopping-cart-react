import { Link, useOutletContext, useParams } from "react-router-dom";
import ShopItemCard from "./ShopItemCard";
import { useEffect, useState } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useOutletContext();
  const { category } = useParams();
  let currentItems;
  let title = "";
  if (category === "men") {
    currentItems = items.filter((item) => item.category === "men's clothing");
    title = "Men's Clothing";
  } else if (category === "women") {
    currentItems = items.filter((item) => item.category === "women's clothing");
    title = "Women's Clothing";
  } else if (category === "electronics") {
    currentItems = items.filter((item) => item.category === "electronics");
    title = "Electronics";
  } else if (category === "jewelery") {
    currentItems = items.filter((item) => item.category === "jewelery");
    title = "Jewelery";
  } else {
    currentItems = items;
    title = "All";
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  function addItemHandler(item, itemCount) {
    let index = itemsInCart.findIndex((currItem) => currItem.id === item.id);
    if (index === -1) {
      const newState = [...itemsInCart, { ...item, count: +itemCount }];
      setItemsInCart(newState);
    } else {
      let newState = [...itemsInCart];
      newState[index] = {
        ...newState[index],
        count: newState[index].count + +itemCount,
      };
      setItemsInCart(newState);
    }
  }

  return (
    <div className="flex justify-center mt-28">
      <div className="w-[max(60rem,80%)] max-w-7xl grid grid-cols-[1fr_3fr] gap-10">
        <aside className="min-w-max">
          <div className="mb-6 shadow">
            <div className="bg-amber-100 px-6 py-4">BROWSE CATEGORIES</div>
            <div className="mx-6 py-6 flex flex-col gap-2">
              <Link to="/shop/men">Men&apos;s Wear</Link>
              <Link to="/shop/women">Women&apos;s Wear</Link>
              <Link to="/shop/electronics">Electronics</Link>
              <Link to="/shop/jewelery">Jewelery</Link>
            </div>
          </div>
          <div className="mb-6 shadow">
            <div className="bg-amber-100 px-6 py-4">BROWSE BRANDS</div>
            <div className="mx-6 py-6 flex flex-col gap-2">
              <Link to="">Adidas</Link>
              <Link to="">Reebok</Link>
              <Link to="">Calvin & Klein</Link>
              <Link to="">Nike</Link>
              <Link to="">LTT</Link>
              <Link to="">D-Brand</Link>
            </div>
          </div>
        </aside>
        <main className="p-4">
          <div>
            <h1 className="font-bold text-3xl">
              {title} ({currentItems.length})
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap justify-items-center gap-8">
            {currentItems.map((item) => {
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
