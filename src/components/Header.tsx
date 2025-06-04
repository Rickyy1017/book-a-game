import { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/images/soccerLogo.webp";
import UserMenuModal from "./UserMenuModal";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const closeUserMenu = () => {
    setUserMenuVisible(false);
  };

  return (
    <>
      <header id="header" className="absolute top-0 w-full z-50 px-10 py-5 flex items-center justify-between text-white">
        
        <div className="flex items-center gap-[4rem]">
          <img src={logo} alt="Logo" className="w-[120px]" />

          <nav
            id="nav"
            className={`${navVisible ? 'block' : 'hidden'} md:flex gap-6 text-white font-medium`}
          >
            <a className="text-primary" href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">All Posts</a>
            <a href="#">Contacts</a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          
          <div id="input" className="bg-gray-700 rounded-full px-4 py-1 flex items-center">
            <FaSearch className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent text-sm placeholder-white focus:outline-none text-white"
            />
          </div>

          {/* User */}
          <div id="input" className="bg-primary cursor-pointer p-2 bg-primary border-4 " onClick={toggleUserMenu}>
            <FaShoppingCart className="text-secondary " />
          </div>
          <div className="bg-primary p-2 bg-primary border-4  rounded-full hover:bg- cursor-pointer " onClick={toggleUserMenu}>
            <FaUser className="text-secondary " />
          </div>
          <div
            id="bars"
            className="bg-primary p-2 bg-primary border-4 rounded-full hover:bg- cursor-pointer md:hidden"
            onClick={toggleNav}
          >
            <FaBars className="text-secondary " />
          </div>
        </div>
      </header>
      {userMenuVisible && <UserMenuModal onClose={closeUserMenu} />}
    </>
  );
}
