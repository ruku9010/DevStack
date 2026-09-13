import logo from "/src/assets/logo-text.png";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center p-2 w-[95%] md:w-[85%] mx-auto md:pt-5 pb-3 md:pb-3">
        {/* hamburger icon */}
        <div className="swap swap-rotate lg:hidden">
          <svg
            className=" swap-off fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </div>

        <img src={logo} alt="DevStack-logo" className="w-32 md:w-40" />

        <ul className=" hidden sm:hidden  lg:flex gap-4 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div>
          <button className="text-gray-600 mr-2 lg:mr-5 cursor-pointer">Sign In</button>
          <button className="btn btn-active btn-sm btn-secondary font-semibold rounded-2xl">
            Sign Up
          </button>
        </div>
      </div>
       <hr className="opacity-9"></hr>
    </div>
  );
};

export default NavBar;
