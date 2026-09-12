import footer from "/src/assets/logo-text.png";

const Footer = () => {
  return (
    <>
        <div>
          <div>
            <img src={footer} alt="Footer" />
            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div>
              <a href="https://github.com/ruku9010">GitHub</a>
            </div>
            <div>
              <a href="https://x.com/rukunujjamans">Twitter</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ruku-sarker/">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3>PRODUCT</h3>
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
          </div>
          <div>
            <h3>COMPANY</h3>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Career</a>
          </div>
          <div>
            <h3>LEGAL</h3>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
        <span>© 2023 DevStack. All rights reserved.</span>
        <div>
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
