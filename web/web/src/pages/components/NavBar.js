import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="logo-container flex-grow flex justify-center">
          <Link to="/" onClick={handleClickLogo}>
            <img src={logo} alt="Logo" className="main-logo" />
          </Link>
        </div>
      </div>
    </nav>
  );  
}

export default NavBar;
