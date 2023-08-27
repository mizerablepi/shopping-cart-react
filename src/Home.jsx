import HomeItemCard from "./HomeItemCard";
// import jewelryImage from "/jewelry.jpg";

function Home() {
  return (
    <div>
      <div className="bg-[url(/hero.jpg)] h-[90vh] bg-cover flex items-center justify-end min-w-[79rem]">
        <div className="mr-20 flex flex-col max-w-2xl flex-1">
          <span className="pb-2 text-lg">Winter Fashion</span>
          <span className="text-6xl font-bold pb-10">
            Fashion Collection
            <br /> 2023
          </span>
          <button className="bg-blue-500 font-bold text-white py-4 px-10 mb-12 self-start">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex">
        <HomeItemCard img={"/electronics.jpg"} />
        <HomeItemCard img={"/women-wear.jpg"} />
        <HomeItemCard img={"/jewelry.jpg"} />
      </div>
    </div>
  );
}

export default Home;
