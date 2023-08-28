export default function HomeItemCard({ img, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={`bg-cover h-[40rem]`}
    >
      {title}
    </div>
  );
}
