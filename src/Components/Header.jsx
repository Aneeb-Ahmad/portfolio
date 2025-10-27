import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
  const [active, setActive] = useState("home");

  const menuItems = ["home", "about", "education", "certificates", "skills", "contact"];

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white flex justify-evenly items-center text-lg px-6 md:px-20 py-4 z-50 shadow-md">
  
      <div
        className="text-2xl md:text-3xl font-bold cursor-pointer text-cyan-400"
        onClick={() => scroll.scrollToTop()}
      >
        Aneeb Ahmad
      </div>
      <nav className="flex gap-6">
  {menuItems.map((item) => (
    <Link
      key={item}
      to={item}
      smooth={true}
      duration={600}
      offset={-70}
      spy={true}
      onSetActive={() => setActive(item)}
      className={`cursor-pointer capitalize ${
        active === item ? "text-cyan-400 font-bold" : "hover:text-cyan-300"
      }`}
    >
      {item}
    </Link>
  ))}
</nav>
<button
  onClick={() => scroll.scrollToBottom()}
  className="bg-cyan-500 text-white px-4 py-2 rounded"
>
  Scroll to Bottom
</button>

    </header>
  );
};

export default Header;
