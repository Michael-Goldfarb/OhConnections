import React, { useState, useEffect } from 'react';
import './ConnectionsPage.css';
import baseballImg from '../images/baseball.png';

const ConnectionsPage = () => {
  const initialTerms = ['Brook Lopez', 'Seth Curry', 'Jrue Holiday', 'Franz Wagner', 'Nikola Jokic', 'Shai Gilgeous-Alexander', 'Kevin Durant', 'Luka Doncic', 'Steve Kerr', 'Jason Kidd', 'Tyronn Lue', 'Steve Nash', 'Rasheed Wallace', 'Gary Payton', 'Charles Barkley', 'Karl Malone'];
  const correctGroups = [
    { number: 1, description: 'Most Technical Fouls', terms: ['Rasheed Wallace', 'Gary Payton', 'Charles Barkley', 'Karl Malone'],  color: '#4CAF50' },
    { number: 1, description: 'NBA Players Turned Coaches', terms: ['Steve Kerr', 'Jason Kidd', 'Tyronn Lue', 'Steve Nash'],  color: '#e5de00' },
    { number: 1, description: 'All Star Starters', terms: ['Nikola Jokic', 'Shai Gilgeous-Alexander', 'Kevin Durant', 'Luka Doncic'], color: '#e27602' },
    { number: 1, description: 'Brothers in the NBA', terms: ['Brook Lopez', 'Seth Curry', 'Jrue Holiday', 'Franz Wagner'], color: '#de0a26' }]
  
  const [selectedTerms, setSelectedTerms] = useState([]);
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [nextPuzzleCountdown, setNextPuzzleCountdown] = useState('');
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
        // If 3 terms match, and the selected group is not exactly the correct group, it's "one away"
        return matchingTerms.length === 3 && group.terms.sort().join(',') !== currentSetString;
      });

      const guessColors = currentSetSorted.map(term => {
        const group = correctGroups.find(group => group.terms.includes(term));
        return group ? group.color : '#FFFFFF'; // Fallback color, you can remove this if all terms will have a group
      });
    
      // Record the move with the colors for each term
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
        }
      } else {
        setSubmittedSets([...submittedSets, currentSetString]);
        setMistakes(mistakes - 1);
        if (mistakes <= 1) {
          setPopupMessage("Nice try!");
          setUserWon(false);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false); // Ensure popup is hidden before revealing groups
    
            const remainingGroups = correctGroups.filter(group => 
                !guessedGroups.some(guessedGroup => 
                    guessedGroup.description === group.description
                )
            );
    
            setRemainingGroupsToReveal(remainingGroups);
            setGameOver(true); // Mark the game as over
            setSelectedTerms([]);
            setMistakes(0); // Ensuring no more actions can be taken
        }, 2000); // Match this with the popup timeout
        return;
        }
      }
    }
  };
  

  useEffect(() => {
    if (gameOver && remainingGroupsToReveal.length > 0) {
      // Reveal the first group in the list after a delay
      const timer = setTimeout(() => {
        const [groupToReveal, ...restGroups] = remainingGroupsToReveal; // Destructure to get the first group and the rest
      setGuessedGroups(prevGuessedGroups => [...prevGuessedGroups, groupToReveal]); // Add it to guessedGroups
      setTerms(terms => terms.filter(term => !groupToReveal.terms.includes(term))); // Remove guessed terms from the terms array
      setRemainingGroupsToReveal(restGroups); // Update to the rest of the groups
    }, 1000);
  
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [remainingGroupsToReveal, gameOver, terms]);
  
  
  const handleShuffle = () => {
    const shuffledTermsArray = shuffleArray([...terms]);
    setTerms(shuffledTermsArray);
  };

  // A simple shuffle function for the terms
  const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
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
            {moveHistory.map((moveRow, index) => (
              <div key={index} className="summary-row">
                {moveRow.map((color, colorIndex) => (
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
    // Generate the game summary string from the move history
    const summaryString = moveHistory.map(moveRow => 
      moveRow.map(color => {
        // You will need to convert the color to the corresponding emoji or text representation
        // This is an example; you will need to map your actual colors to the desired output
        switch (color) {
          case correctGroups[0].color: return '🟩';
          case correctGroups[1].color: return '🟨';
          case correctGroups[2].color: return '🟧';
          case correctGroups[3].color: return '🟥';
          default: return '⬜️'; // Default for incorrect guesses or unmatched terms
        }
      }).join('')
    ).join('\n');
  
    // Use nextPuzzleCountdown for the NEXT PUZZLE IN part
    const legend = `\n\n🟩 = Easy\n🟨 = Medium\n🟧 = Hard\n🟥 = Impossible`;

    const completeSummary = `OhConnections\nBoard #${correctGroups[0].number}\n\n${summaryString}${legend}\n\nNEXT PUZZLE IN: ${nextPuzzleCountdown}\n\nwww.ohconnections.com`;
    
    navigator.clipboard.writeText(completeSummary).then(() => {
      // Notify the user that the summary was copied, if needed.
      setPopupMessage('Game summary copied to clipboard!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };
  
  
  
  

  return (
    <div className="connections-game">
    <h1>Create four groups of four!</h1>
    {showPopup && <div className="popup-message">{popupMessage}</div>} {/* Move this above the .guessed-groups and .terms-grid */}
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
  </div>
);

  
};

export default ConnectionsPage;