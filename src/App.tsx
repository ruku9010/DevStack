import logo from '/src/assets/logo-text.png';

function App() {
  return (
    <>
      <div className='flex justify-between items-center w-[85%] mx-auto my-5'>
        <img src={logo} alt="DevStack-logo" />

        <ul className='flex gap-4 items-center'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div>
          <button className="mr-5 cursor-pointer">Sign In</button>
          <button className="btn btn-active btn-secondary rounded-3xl">Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default App;
