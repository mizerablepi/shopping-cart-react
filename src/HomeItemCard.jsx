export default function HomeItemCard({ img, title }) {
  return <div className={`bg-[url(${img})] bg-cover h-96`}>{title}</div>;
  // return (
  //   <div className="relative h-[20rem] w-[10rem]">
  //     <img src={img} className="absolute object-cover" />
  //     <span className="absolute bottom-24">
  //       This is text related to the product yaay
  //     </span>
  //   </div>
  // );
}
