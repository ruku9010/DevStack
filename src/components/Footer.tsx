import footer from "/src/assets/logo-text.png";

const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <div className="grid grid-cols-1 w-[95%] mx-auto md:grid-cols-4 gap-8 textDesign p-10">
        <div>
          <img src={footer} alt="Footer" />
          <p className="textDesign text-sm leading-6 mt-2 line-clamp-2">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex items-center gap-4 mt-4 font-semibold">
            <a href="https://github.com/ruku9010">GitHub</a>

            <a href="https://x.com/rukunujjamans">Twitter</a>

            <a href="https://www.linkedin.com/in/ruku-sarker/">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-black">PRODUCT</h3>
          <div className="flex flex-col gap-2 mt-4">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-black">COMPANY</h3>
          <div className="flex flex-col gap-2 mt-4">
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Career</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-black">LEGAL</h3>
          <div className="flex flex-col gap-2 mt-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[95%] mx-auto md:flex-row items-center justify-between mt-8 border-t border-gray-200 pt-4 textDesign p-10">
        <span>© 2023 DevStack. All rights reserved.</span>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
