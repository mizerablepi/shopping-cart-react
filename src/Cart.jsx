import { useOutletContext } from "react-router-dom";
import CartItemCard from "./CartItemCard";

export default function Cart() {
  const [itemsInCart, setItemsInCart] = useOutletContext();
  const totalCartPrice = itemsInCart.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);
  return (
    <div className="flex justify-center">
      <div className="w-11/12 mt-12">
        <h2 className="text-2xl font-bold pb-6 border-b">My Cart: </h2>
        {itemsInCart.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
        <div className="text-end mr-8 mt-4 text-xl font-bold">
          Total : <u>${totalCartPrice}</u>
        </div>
      </div>
    </div>
  );
}
