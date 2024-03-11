import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./NavBar.css";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center">
        <div className="logo-container flex-grow flex justify-center">
          <Link to="/" onClick={handleClickLogo}>
            <img src={logo} alt="Logo" className="main-logo" />
          </Link>
        </div>
        <div className="dropdown-container">
          <button onClick={toggleDropdown} className="dropdown-button">Previous Grids</button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Today</div>
              {['03-15-2024',].map((item, index) => (
                <div key={index} className="dropdown-item">{item}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );  
}

export default NavBar;