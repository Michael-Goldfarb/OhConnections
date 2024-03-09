import React, { useState, useEffect } from 'react';
import './ConnectionsPage.css';
import baseballImg from '../images/baseball.png';
import freddieFreeman from '../images/examples/freddiefreeman.png';
import mookieBetts from '../images/examples/mookiebetts.png';
import shoheiOhtani from '../images/examples/shoheiohtani.png';
import maxMuncy from '../images/examples/maxmuncy.png';
import joseAltuve from '../images/examples/josealtuve.png';
import miguelCabrera from '../images/examples/miguelcabrera.png';
import ronaldAcunaJr from '../images/examples/ronaldacunajr.png';
import salvadorPerez from '../images/examples/salvadorperez.png';

const ConnectionsPage = () => {
  const initialTerms = ['Brook Lopez', 'Seth Curry', 'Jrue Holiday', 'Franz Wagner', 'Nikola Jokic', 'Shai Gilgeous-Alexander', 'Kevin Durant', 'Luka Doncic', 'Steve Kerr', 'Jason Kidd', 'Tyronn Lue', 'Steve Nash', 'Rasheed Wallace', 'Gary Payton', 'Charles Barkley', 'Karl Malone'];
  const correctGroups = [
    { number: 1, description: 'Most Technical Fouls', terms: ['Rasheed Wallace', 'Gary Payton', 'Charles Barkley', 'Karl Malone'],  color: '#4CAF50' },
    { number: 1, description: 'NBA Players Turned Coaches', terms: ['Steve Kerr', 'Jason Kidd', 'Tyronn Lue', 'Steve Nash'],  color: '#e5de00' },
    { number: 1, description: 'All Star Starters', terms: ['Nikola Jokic', 'Shai Gilgeous-Alexander', 'Kevin Durant', 'Luka Doncic'], color: '#e27602' },
    { number: 1, description: 'Brothers in the NBA', terms: ['Brook Lopez', 'Seth Curry', 'Jrue Holiday', 'Franz Wagner'], color: '#de0a26' }]
  
  const [selectedTerms, setSelectedTerms] = useState([]);
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [readyToShowPopUp, setReadyToShowPopUp] = useState(false);
  const [nextPuzzleCountdown, setNextPuzzleCountdown] = useState('');
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const [moveHistory, setMoveHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [remainingGroupsToReveal, setRemainingGroupsToReveal] = useState([]);
  const [mistakes, setMistakes] = useState(4);
  const [submittedSets, setSubmittedSets] = useState([]);
  const [guessedGroups, setGuessedGroups] = useState([]);
  const [terms, setTerms] = useState(initialTerms);
  // const [terms, setTerms] = useState(() => {
  //   const savedTerms = localStorage.getItem('terms');
  //   return savedTerms ? JSON.parse(savedTerms) : initialTerms;
  // });
  // const [guessedGroups, setGuessedGroups] = useState(() => {
  //   const savedGroups = localStorage.getItem('guessedGroups');
  //   return savedGroups ? JSON.parse(savedGroups) : [];
  // });
  // const [mistakes, setMistakes] = useState(() => {
  //   const savedMistakes = localStorage.getItem('mistakes');
  //   return savedMistakes !== null ? parseInt(savedMistakes, 10) : 4;
  // });
  // const [submittedSets, setSubmittedSets] = useState(() => {
  //   const savedSets = localStorage.getItem('submittedSets');
  //   return savedSets ? JSON.parse(savedSets) : [];
  // });
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem('terms', JSON.stringify(terms));
  // }, [terms]);
  
  // useEffect(() => {
  //   localStorage.setItem('mistakes', mistakes.toString());
  // }, [mistakes]);

  // useEffect(() => {
  //   localStorage.setItem('submittedSets', JSON.stringify(submittedSets));
  // }, [submittedSets]);

  // useEffect(() => {
  //   localStorage.setItem('guessedGroups', JSON.stringify(guessedGroups));
  // }, [guessedGroups]);

  const handleTermClick = (term) => {
    if (gameOver) return;
    if (selectedTerms.includes(term)) {
      setSelectedTerms(selectedTerms.filter(t => t !== term));
      setShowPopup(false);
    } else {
      if (selectedTerms.length < 4) {
        setSelectedTerms([...selectedTerms, term]);
        setShowPopup(false);
      } else {
        setPopupMessage("You cannot select more than 4 players.");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      }
    }
  };

  const handleSubmit = () => {
    if (gameOver || mistakes <= 0) {
      return;
    }
    const currentSetSorted = [...selectedTerms].sort();
    const currentSetString = currentSetSorted.join(',');
  
    if (submittedSets.includes(currentSetString)) {
      setPopupMessage("You cannot guess the same 4 players twice.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    } else {
      const oneAway = correctGroups.some(group => {
        const matchingTerms = group.terms.filter(term => currentSetSorted.includes(term));
        return matchingTerms.length === 3 && group.terms.sort().join(',') !== currentSetString;
      });

      const guessColors = selectedTerms.map(term => {
        const group = correctGroups.find(group => group.terms.includes(term));
        return group ? group.color : '#FFFFFF';
      });
    
      setMoveHistory(prevHistory => [
        ...prevHistory,
        guessColors
      ]);
  
      if (oneAway) {
        if (mistakes > 1) {
          setPopupMessage("One Away!");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
          setSubmittedSets([...submittedSets, currentSetString]);
          setMistakes(mistakes - 1);
          return; 
        }
      }

      const foundGroup = correctGroups.find(group =>
        group.terms.sort().join(',') === currentSetString
      );
      
      if (foundGroup) {
        const updatedGuessedGroups = [...guessedGroups, foundGroup];
        setGuessedGroups(updatedGuessedGroups);
        setTerms(terms.filter(term => !foundGroup.terms.includes(term)));
        setSelectedTerms([]);
        if (updatedGuessedGroups.length === correctGroups.length) {
          setGameOver(true);
          setUserWon(true);
          setTimeout(() => {
            setShowResultsPopup(true);
        }, 1000);
        }
      } else {
        setSubmittedSets([...submittedSets, currentSetString]);
        setMistakes(mistakes - 1);
        if (mistakes <= 1) {
          setGameOver(true);
          setPopupMessage("Nice try!");
          setUserWon(false);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
    
            const remainingGroups = correctGroups.filter(group => 
                !guessedGroups.some(guessedGroup => 
                    guessedGroup.description === group.description
                )
            );
    
            setRemainingGroupsToReveal(remainingGroups);
            setReadyToShowPopUp(true);
            setSelectedTerms([]);
            setMistakes(0);
        }, 2000);
        return;
        }
      }
    }
  };
  

  useEffect(() => {
    if (gameOver && remainingGroupsToReveal.length > 0) {
      const timer = setTimeout(() => {
        const [groupToReveal, ...restGroups] = remainingGroupsToReveal;
      setGuessedGroups(prevGuessedGroups => [...prevGuessedGroups, groupToReveal]);
      setTerms(terms => terms.filter(term => !groupToReveal.terms.includes(term)));
      setRemainingGroupsToReveal(restGroups);
    }, 1000);
  
      return () => clearTimeout(timer);
    }
  }, [remainingGroupsToReveal, gameOver, terms]);

  useEffect(() => {
    if (gameOver && readyToShowPopUp && remainingGroupsToReveal.length === 0) {
      const timer = setTimeout(() => {
        setShowResultsPopup(true);
      }, 1700);
      return () => clearTimeout(timer);      
    }
  }, [remainingGroupsToReveal, gameOver, readyToShowPopUp]);
  
  
  const handleShuffle = () => {
    const shuffledTermsArray = shuffleArray([...terms]);
    setTerms(shuffledTermsArray);
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };
  const shuffledTermsArray = shuffleArray([...terms]);

  const difficultyLevels = [
    { name: 'Easy', color: '#4CAF50' },
    { name: 'Medium', color: '#e5de00' },
    { name: 'Hard', color: '#e27602' },
    { name: 'Impossible', color: '#de0a26' },
  ];
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const nextPuzzleTimeET = new Date();
      nextPuzzleTimeET.setHours(19, 0, 0, 0); // 7:00 PM ET
      if (nextPuzzleTimeET < now) {
        nextPuzzleTimeET.setDate(nextPuzzleTimeET.getDate() + 1);
      }
  
      const timeUntilNextPuzzle = nextPuzzleTimeET - now;
      const countdown = new Date(timeUntilNextPuzzle).toISOString().substr(11, 8);
      setNextPuzzleCountdown(countdown);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  
  const renderResultsPopup = () => {
    const message = userWon ? "Good Job!" : "Next Time!";
    
    return (
      <div className="results-popup" onClick={() => setShowResultsPopup(false)}>
        <div className="results-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setShowResultsPopup(false)}>X</button>
          <h2 className="message-header">{message}</h2>
          <p className="game-number">OhConnections #{correctGroups[0].number}</p>
          <div className="difficulty-container">
            {difficultyLevels.map(level => (
              <div key={level.name} className="difficulty-level">
                <span className="difficulty-color" style={{ backgroundColor: level.color }}></span>
                <span className="difficulty-name">{level.name}</span>
              </div>
            ))}
          </div>
          <div className="game-summary-grid">
          {moveHistory.map((colorSet, index) => (
  <div key={index} className="summary-row">
    {colorSet.map((color, colorIndex) => (
      <div key={colorIndex} className="summary-block" style={{ backgroundColor: color }}></div>
    ))}
  </div>
))}

          </div>
          <p className="next-puzzle-countdown">NEXT BOARD IN: {nextPuzzleCountdown}</p>
          <button className="copy-summary-button" onClick={handleCopySummary}>Share Results</button>
        </div>
      </div>
    );
  };

  const handleCopySummary = () => {
    const summaryString = moveHistory.map(moveRow => 
      moveRow.map(color => {
        switch (color) {
          case correctGroups[0].color: return '🟩';
          case correctGroups[1].color: return '🟨';
          case correctGroups[2].color: return '🟧';
          case correctGroups[3].color: return '🟥';
          default: return '⬜️';
        }
      }).join('')
    ).join('\n');
  
    const legend = `\n\n🟩 = Easy\n🟨 = Medium\n🟧 = Hard\n🟥 = Impossible`;

    const completeSummary = `OhConnections\nBoard #${correctGroups[0].number}\n\n${summaryString}${legend}\n\nNEXT PUZZLE IN: ${nextPuzzleCountdown}\n\nwww.ohconnections.com`;
    
    navigator.clipboard.writeText(completeSummary).then(() => {
      setPopupMessage('Game summary copied to clipboard!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };
  
  
  const renderHowToPlayPopup = () => {
    if (!showHowToPlay) return null;
  
    return (
      <div className="how-to-play-popup" onClick={() => setShowHowToPlay(false)}>
        <div className="how-to-play-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={() => setShowHowToPlay(false)}>X</button>
          <h1>How to Play</h1>
          <p>Goal: Find groups of four MLB players that have something in common</p>
          <div className="example-section">
            <p>Example:</p>
            <div className="example-group">
              <p>CURRENT DODGERS PLAYERS</p>
              <div className="player-images">
                <img src={freddieFreeman} alt="Freddie Freeman" />
                <img src={mookieBetts} alt="Mookie Betts" />
                <img src={shoheiOhtani} alt="Shohei Ohtani" />
                <img src={maxMuncy} alt="Max Muncy" />
            </div>
            </div>
            <div className="example-group">
              <p>PLAYERS BORN IN VENEZUELA</p>
              <div className="player-images">
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
          <div className="difficulty-container">
          {difficultyLevels.map(level => (
            <div key={level.name} className="difficulty-level">
              <span className="difficulty-color" style={{ backgroundColor: level.color }}></span>
              <span className="difficulty-name">{level.name}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  };
  
  
  

  return (
    <div className="connections-game">
    <div className="header-container">
      <div className="button-placeholder"></div>
      <h1>Create four groups of four!</h1>
      <button className="game-controls button how-to-play-button" onClick={() => setShowHowToPlay(true)}>How to Play</button>
    </div>
    {showPopup && <div className="popup-message">{popupMessage}</div>}
    <div className="guessed-groups">
      {guessedGroups.map((group, index) => (
        <div 
          key={index} 
          className="guessed-group-combined"
          style={{ backgroundColor: group.color }}
        >
          <div className="group-description">{group.description}</div>
          <div className="group-terms">{group.terms.join(', ')}</div>
        </div>
      ))}
    </div>
    <div className="terms-grid">
      {terms.map((term, index) => (
        <div key={index} className={`term-block ${selectedTerms.includes(term) ? 'selected' : ''}`} onClick={() => handleTermClick(term)}>
          {term}
        </div>
      ))}
    </div>
    {!gameOver && (
      <div className="mistakes-section">
        <div className="mistakes-indicator">
          <span className="mistakes-text">Mistakes remaining: </span>
          {Array.from({ length: mistakes }, (_, i) => (
            <img key={i} src={baseballImg} alt="Baseball" className="baseball-icon" />
          ))}
        </div>
      </div>
    )}
    {!gameOver ? (
      <div className="game-controls">
        <button onClick={handleShuffle}>Shuffle</button>
        <button onClick={() => setSelectedTerms([])} disabled={selectedTerms.length === 0}>Deselect All</button>
        <button onClick={handleSubmit} disabled={selectedTerms.length !== 4}>Submit</button>
      </div>
    ) : (
      <div className="game-over-controls">
        <button className="game-button" onClick={() => setShowResultsPopup(true)}>View Results</button>
      </div>
    )}
    {showResultsPopup && renderResultsPopup()}
    {renderHowToPlayPopup()}
  </div>
);

  
};

export default ConnectionsPage;