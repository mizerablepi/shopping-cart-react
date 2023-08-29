export default function ItemCount({ count }) {
  if (count < 10) {
    return (
      <>
        <a href="" className={``}>
          <img src="/cart-outline.svg" alt="checkout" className="h-6" />
        </a>
        <div className="absolute top-[-0.8rem] left-6">{count.toString()}</div>
      </>
    );
  } else {
    return (
      <a
        href=""
        className={`after:content-['9+'] after:absolute after:top-[-0.8rem] after:left-6`}
      >
        <img src="/cart-outline.svg" alt="checkout" className="h-6" />
      </a>
    );
  }
}
