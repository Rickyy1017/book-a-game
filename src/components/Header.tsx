import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/soccerLogo.webp";
import { useAuth } from "../context/AuthContext";
import { style } from "framer-motion/client";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
    setLoginFormVisible(false);
  };

  const showLoginForm = () => {
    setLoginFormVisible(true);
    setUserMenuVisible(false);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, role as "admin" | "user" | "guest");
    setLoginFormVisible(false);
    setUserMenuVisible(false);
    if (role === "admin") {
      navigate("/admin");
    }
  };

  const handleLoginButtonClick = () => {
    if (user && user.role === "admin") {
      navigate("/admin");
    } else {
      showLoginForm();
    }
  };

  return (
    <>
      <header id="header" className="absolute top-0 w-full z-50 px-10 py-5 flex items-center justify-between text-white">
        <div className="flex items-center gap-[4rem]">
          <img src={logo} alt="Logo" className="w-[120px]" />

          <nav
            id="nav"
            className={`${navVisible ? "block" : "hidden"} md:flex gap-6 text-white font-medium`}
          >
            <a className="text-primary" href="#">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">All Posts</a>
            <a href="#">Contacts</a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="bg-gray-700 rounded-full px-4 py-1 flex items-center">
            <FaSearch className="text-secondary mr-2" />
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent text-sm placeholder-white focus:outline-none text-white"
            />
          </div>

          {/* User */}
          <div
            className="bg-primary cursor-pointer p-2 bg-primary border-4 "
            onClick={handleLoginButtonClick}
            title="Login"
          >
            <FaShoppingCart className="text-secondary " />
          </div>
          <div
            className="bg-primary p-2 bg-primary border-4  rounded-full hover:bg-button cursor-pointer "
            onClick={showLoginForm}
            title="User Login"
          >
            <FaUser className="text-secondary " />
          </div>
          <div
            id="bars"
            className="bg-primary p-2 bg-primary border-4 rounded-full hover:bg-button cursor-pointer md:hidden"
            onClick={toggleNav}
          >
            <FaBars className="text-secondary " />
          </div>
        </div>
      </header>

      {loginFormVisible && (
        <div className="fixed inset-0 bg- bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleLoginSubmit}
            className="bg-white p-6 rounded shadow-md w-80"
          >
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">Login</h2>
            <label className="block mb-2 text-xl text-primary">
              Username:
              <input
                type="text"
                value={username}
                
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 rounded w-full p-2"
                required
              />
            </label>
            <label className="block mb-4">
              Role:
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 rounded w-full p-2"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setLoginFormVisible(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
