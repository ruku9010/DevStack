import logo from "/src/assets/logo-text.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-[85%] mx-auto my-5">
        {/* hamburger icon */}
        <div className="swap swap-rotate md:hidden">
          <svg
            className=" swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </div>

        <img src={logo} alt="DevStack-logo" />

        <ul className=" hidden sm:hidden  md:flex gap-4 items-center">
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
          <button className="mr-5 cursor-pointer">Sign In</button>
          <button className="btn btn-active btn-sm btn-secondary rounded-2xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
