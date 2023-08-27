export default function ItemCount({ count }) {
  if (count < 10) {
    return (
      <div className="bg-gray-400 rounded-xl text-white px-2 pt-[2px]">
        {count}
      </div>
    );
  } else {
    return (
      <div className="bg-gray-400 rounded-xl text-white px-1 pt-[2px]">9+</div>
    );
  }
}
