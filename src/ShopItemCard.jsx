import { useState } from "react";

export default function ShopItemCard({ item, addItemHandler }) {
  const [itemCount, setItemCount] = useState(0);
  function handleInput(e) {
    if (!Number.isInteger(+e.target.value)) return;
    setItemCount(+e.target.value);
  }
  function handleAddToCart() {
    addItemHandler(item);
  }
  return (
    <div className="w-40 flex flex-col items-center">
      <img src={item.image} />
      <div className="mt-3 text-center text-lg">{item.title}</div>
      <div className="text-center text-gray-400 font-bold">${item.price}</div>
      <div className="flex justify-center mt-2">
        <input
          type="text"
          value={itemCount}
          className="w-1/3 border border-amber-200 mr-2 text-right"
          onInput={handleInput}
        />
        <button
          className="border px-2 bg-slate-100 mr-1"
          onClick={() => setItemCount(itemCount + 1)}
        >
          +
        </button>
        <button
          className="border px-2 bg-slate-100"
          onClick={() => setItemCount(itemCount - 1)}
        >
          -
        </button>
      </div>
      <button
        className="mt-2 bg-amber-200 px-4 py-1 rounded-sm"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}
