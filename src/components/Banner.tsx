import bannerImage from "/src/assets/banner-stack.png";
const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[85%] mx-auto">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold mt-3">Build Your Ideal <br></br><span className="text-theme-gradient text-4xl font-extrabold tracking-tight">Development Stack</span></h1>
          <p className="textDesign">
            Explore frontend, backend, database, and tooling options,<br></br> compare
            them side by side, and put together the stack that fits your <br></br>next
            project.
          </p>
          <div className="flex gap-3 mt-20 w-[350px]">
            <button className="flex-1 btn text-gray-100 rounded-lg bg-theme-gradient">Explore Technologies</button>
          <button className="btn rounded-lg flex-1">Learn More</button>
          </div>
        </div>

        <img src={bannerImage} alt="devstack-banner-image" />
      </div>
    </>
  );
};

export default Banner;
