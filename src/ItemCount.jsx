export default function ItemCount({ count }) {
  if (count <= 20) {
    return (
      <>
        <img src="/cart-outline.svg" alt="checkout" className="h-6" />
        <div className="absolute top-[-0.8rem] left-6">{count.toString()}</div>
      </>
    );
  } else {
    return (
      <>
        <img src="/cart-outline.svg" alt="checkout" className="h-6" />
        <div className="absolute top-[-0.8rem] left-6">20+</div>
      </>
    );
  }
}
