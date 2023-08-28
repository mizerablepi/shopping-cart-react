import HomeItemCard from "./HomeItemCard";

function Home() {
  return (
    <div>
      <div className="bg-[url(/hero.jpg)] h-[90vh] bg-cover flex items-center justify-end">
        <div className="ml-[37rem] mr-20 flex flex-col max-w-2xl flex-1">
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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 mt-4">
        <HomeItemCard img={"/electronics.jpg"} title={"Visit electronics"} />
        <HomeItemCard img={"/women-wear.jpg"} />
        <HomeItemCard img={"/jewelry.jpg"} />
      </div>
    </div>
  );
}

export default Home;
