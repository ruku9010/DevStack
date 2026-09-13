import bannerImage from "/src/assets/banner-stack.png";
const Banner = () => {
  return (
    <>
      <div className=" md:flex justify-between items-center w-[85%] mx-auto">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-4xl font-bold mt-3">
            Build Your Ideal <br></br>
            <span className="text-theme-gradient text-4xl font-extrabold tracking-tight">
              Development Stack
            </span>
          </h1>
          <p className="textDesign">
            Explore frontend, backend, database, and tooling options,<br></br>{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br></br>next project.
          </p>
          <div className="mt-20 w-full md:w-[350px]">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <button className="flex-1 btn text-gray-100 rounded-lg bg-theme-gradient">
                Explore Technologies
              </button>

              <button className="flex-1 btn rounded-lg">Learn More</button>
            </div>
          </div>
        </div>

        <img src={bannerImage} alt="devstack-banner-image" />
      </div>
    </>
  );
};

export default Banner;
