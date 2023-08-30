export default function CartItemCard({ item }) {
  const totalPrice = item.price * item.count;
  return (
    <div className="flex gap-4 p-8 border-b">
      <img src={item.image} className="w-[max(10%,5rem)] border rounded p-2" />
      <div className="flex flex-col gap-2">
        <span className="mb-auto">{item.title}</span>
        <span>
          <b>Price per item : </b> ${item.price}
        </span>
        <span>
          <b>No. of items : </b> {item.count}
        </span>
      </div>
      <div className="ml-auto text-xl">
        Price: <br />
        <span className="font-bold  text-green-500">${totalPrice}</span>
      </div>
    </div>
  );
}
