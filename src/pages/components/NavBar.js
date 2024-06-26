import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./NavBar.css";
import freddieFreeman from '../../images/examples/freddiefreeman.png';
import mookieBetts from '../../images/examples/mookiebetts.png';
import shoheiOhtani from '../../images/examples/shoheiohtani.png';
import maxMuncy from '../../images/examples/maxmuncy.png';
import joseAltuve from '../../images/examples/josealtuve.png';
import ronaldAcunaJr from '../../images/examples/ronaldacunajr.png';
import miguelCabrera from '../../images/examples/miguelcabrera.png';
import salvadorPerez from '../../images/examples/salvadorperez.png';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const difficultyLevels = [
    { name: 'Easy', color: '#4CAF50' },
    { name: 'Medium', color: '#e5de00' },
    { name: 'Hard', color: '#e27602' },
    { name: 'Impossible', color: '#de0a26' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderHowsToPlayPopup = () => {
    if (!showHowToPlay) return null;
  
    return (
      <div className="hows-to-play-popup" onClick={() => setShowHowToPlay(false)}>
        <div className="hows-to-play-content" onClick={e => e.stopPropagation()}>
          <button className="closes-button" onClick={() => setShowHowToPlay(false)}>X</button>
          <h1>How to Play</h1>
          <p>Goal: Find groups of four MLB players that have something in common</p>
          <div className="examples-section">
            <p>Example:</p>
            <div className="examples-group">
              <p>CURRENT DODGERS PLAYERS</p>
              <div className="players-images">
                <img src={freddieFreeman} alt="Freddie Freeman" />
                <img src={mookieBetts} alt="Mookie Betts" />
                <img src={shoheiOhtani} alt="Shohei Ohtani" />
                <img src={maxMuncy} alt="Max Muncy" />
            </div>
            </div>
            <div className="examples-group">
              <p>PLAYERS BORN IN VENEZUELA</p>
              <div className="players-images">
                <img src={joseAltuve} alt="Jose Altuve" />
                <img src={ronaldAcunaJr} alt="Ronald Acuña Jr" />
                <img src={miguelCabrera} alt="Miguel Cabrera" />
                <img src={salvadorPerez} alt="Salvador Perez" />
            </div>
            </div>
          </div>
          <p>Select four similar players and tap 'Submit' to check if you are correct</p>
          <p>You have four incorrect guesses before the game ends</p>
          <p>Each group is represented by a color: </p>
          <div className="difficultys-container">
          {difficultyLevels.map(level => (
            <div key={level.name} className="difficultys-level">
              <span className="difficultys-color" style={{ backgroundColor: level.color }}></span>
              <span className="difficultys-name">{level.name}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  };








  return (
    <nav className="bg-gray-800">
      <div className="navbars">
      <div className="hows-to-play-container">
          <button className="hows-to-play-button" onClick={() => setShowHowToPlay(true)}>How to Play</button>
        </div>
        <div className="logo-container">
          <Link to="/" onClick={handleClickLogo}>
            <img src={logo} alt="Logo" className="main-logo" />
          </Link>
        </div>
        <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">Previous Grids</button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigate('/')}>06-25</div>
              {['06-18', '06-11', '06-04', '05-28', '05-21', '05-14', '05-07', '04-30', '04-23', '04-16', '04-09', '04-02', '03-26', '03-19'].map((item, index) => (
                <div key={index} className="dropdown-item" onClick={() => navigate(`/${item}`)}>{item}</div>
              ))}
            </div>
          )}
        </div>
        {renderHowsToPlayPopup()}
      </div>
    </nav>
  );  
}

export default NavBar;