import React, { useState, useEffect } from 'react';
import '../../ConnectionsPage.css';
import { playerImages, initialTerms, correctGroups } from './gameData.js';
import baseballImg from '../../../images/baseball.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


const ConnectionsPage = () => {
  const gameSessionId = '03-26-2024';

  const [cooldown, setCooldown] = useState(false);
  const [guessIncorrect, setGuessIncorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [width, height] = useWindowSize();
  const [readyToShowPopUp, setReadyToShowPopUp] = useState(false);
  const [nextPuzzleCountdown, setNextPuzzleCountdown] = useState('');
  const [userWon, setUserWon] = useState(false);
  const [animateIndex, setAnimateIndex] = useState(null);
  const [shake, setShake] = useState(false);
  const [showStatsPopup, setShowStatsPopup] = useState(false);
  const [wins, setWins] = useState(() => {
    const savedWins = localStorage.getItem('wins');
    return savedWins ? JSON.parse(savedWins) : 0;
  });
  const [gamesPlayed, setGamesPlayed] = useState(() => {
    const savedGames = localStorage.getItem('gamesPlayed');
    return savedGames ? JSON.parse(savedGames) : 0;
  });
  const [gameOver, setGameOver] = useState(() => {
    const saved = localStorage.getItem(`gameOver-${gameSessionId}`);
    return saved ? JSON.parse(saved) : false;
  });
  
  const [showResultsPopup, setShowResultsPopup] = useState(() => {
    const saved = localStorage.getItem(`showResultsPopup-${gameSessionId}`);
    return saved ? JSON.parse(saved) : false;
  });
  
  const [moveHistory, setMoveHistory] = useState(() => {
    const saved = localStorage.getItem(`moveHistory-${gameSessionId}`);
    return saved ? JSON.parse(saved) : [];
  });
  
  const [remainingGroupsToReveal, setRemainingGroupsToReveal] = useState(() => {
    const savedData = localStorage.getItem(`remainingGroupsToReveal-${gameSessionId}`);
    return savedData ? JSON.parse(savedData) : [];
  });
  
  const [selectedTerms, setSelectedTerms] = useState(() => {
    const savedData = localStorage.getItem(`selectedTerms-${gameSessionId}`);
    return savedData ? JSON.parse(savedData) : [];
  });
  
  const [terms, setTerms] = useState(() => {
    const savedTerms = localStorage.getItem(`terms-${gameSessionId}`);
    return savedTerms ? JSON.parse(savedTerms) : initialTerms;
  });
  
  const [guessedGroups, setGuessedGroups] = useState(() => {
    const savedGroups = localStorage.getItem(`guessedGroups-${gameSessionId}`);
    return savedGroups ? JSON.parse(savedGroups) : [];
  });
  
  const [mistakes, setMistakes] = useState(() => {
    const savedMistakes = localStorage.getItem(`mistakes-${gameSessionId}`);
    return savedMistakes !== null ? parseInt(savedMistakes, 10) : 4;
  });
  
  const [submittedSets, setSubmittedSets] = useState(() => {
    const savedSets = localStorage.getItem(`submittedSets-${gameSessionId}`);
    return savedSets ? JSON.parse(savedSets) : [];
  });
  
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem(`terms-${gameSessionId}`, JSON.stringify(terms));
  }, [terms, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`mistakes-${gameSessionId}`, mistakes.toString());
  }, [mistakes, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`submittedSets-${gameSessionId}`, JSON.stringify(submittedSets));
  }, [submittedSets, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`guessedGroups-${gameSessionId}`, JSON.stringify(guessedGroups));
  }, [guessedGroups, gameSessionId]);

  useEffect(() => {
    localStorage.setItem(`remainingGroupsToReveal-${gameSessionId}`, JSON.stringify(remainingGroupsToReveal));
  }, [remainingGroupsToReveal, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`selectedTerms-${gameSessionId}`, JSON.stringify(selectedTerms));
  }, [selectedTerms, gameSessionId]);  

  useEffect(() => {
    localStorage.setItem(`gameOver-${gameSessionId}`, JSON.stringify(gameOver));
  }, [gameOver, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`showResultsPopup-${gameSessionId}`, JSON.stringify(showResultsPopup));
  }, [showResultsPopup, gameSessionId]);
  
  useEffect(() => {
    localStorage.setItem(`moveHistory-${gameSessionId}`, JSON.stringify(moveHistory));
  }, [moveHistory, gameSessionId]);

  useEffect(() => {
    const updatedTerms = initialTerms.filter(term => 
      !guessedGroups.some(group => group.terms.includes(term))
    );
    
    setTerms(updatedTerms);
    localStorage.setItem(`terms-${gameSessionId}`, JSON.stringify(updatedTerms));
  }, [guessedGroups, gameSessionId]);
  

  useEffect(() => {
    const initTerms = shuffleArray(JSON.parse(localStorage.getItem(`terms-${gameSessionId}`)) || initialTerms);
    const initGuessedGroups = JSON.parse(localStorage.getItem(`guessedGroups-${gameSessionId}`)) || [];   
    setTerms(initTerms);
    setGuessedGroups(initGuessedGroups);   
  }, []);
  
  

  const getVictoryMessage = (mistakesLeft) => {
    switch(mistakesLeft) {
      case 4: return "Perfect!";
      case 3: return "Great Job!";
      case 2: return "Solid!";
      case 1: return "Phew!";
      default: return "Good Job!";
    }
  };
  
  const handleTermClick = (term) => {
    if (gameOver) return;
    if (isSubmitting || gameOver || cooldown) return;
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
    if (gameOver || mistakes <= 0 || selectedTerms.length !== 4 || cooldown) {
        return;
    }

    const currentSetSorted = [...selectedTerms].sort();
    const currentSetString = currentSetSorted.join(',');
    
    if (submittedSets.includes(currentSetString)) {
      setPopupMessage("You cannot guess the same 4 players twice.");
      setShowPopup(true);
      setTimeout(() => {
          setShowPopup(false);
          setIsSubmitting(false);
      }, 2000);
      return;
    }
  
    setIsSubmitting(true);

  setTimeout(() => {
    const oneAway = correctGroups.some(group => {
        const matchingTerms = group.terms.filter(term => currentSetSorted.includes(term));
        return matchingTerms.length === 3 && group.terms.sort().join(',') !== currentSetString;
    });

    const guessColors = selectedTerms.map(term => {
        const group = correctGroups.find(group => group.terms.includes(term));
        return group ? group.color : '#FFFFFF';
    });

    setMoveHistory(prevHistory => [...prevHistory, guessColors]);
        
    const foundGroup = correctGroups.find(group => group.terms.sort().join(',') === currentSetString);

    if (!foundGroup) {
      setGuessIncorrect(true);
      setShake(true);

      setCooldown(true);
        setTimeout(() => {
          setCooldown(false);
        }, 1200);

      setTimeout(() => {
        setShake(false);

        if (oneAway && mistakes > 1) {
          setPopupMessage("One Away!");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000);
        }
            
        setSubmittedSets([...submittedSets, currentSetString]);
        setMistakes(mistakes - 1);

        if (mistakes <= 1) {
            setGameOver(true);
            setUserWon(false);
            setPopupMessage("Nice try!");
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                setRemainingGroupsToReveal(correctGroups.filter(group => !guessedGroups.some(guessedGroup => guessedGroup.description === group.description)));
                setReadyToShowPopUp(true);
                setSelectedTerms([]);
                setMistakes(0);
                setGamesPlayed(prevGames => {
                  const newGames = prevGames + 1;
                  localStorage.setItem('gamesPlayed', JSON.stringify(newGames));
                  return newGames;
                });
            }, 2000);
        }
        setGuessIncorrect(false);
      }, 850);
        } else {
            const updatedTerms = terms.filter(term => !foundGroup.terms.includes(term));
            const updatedGuessedGroups = [...guessedGroups, { ...foundGroup, terms: selectedTerms }];            
            setTerms(updatedTerms);
            setGuessedGroups(updatedGuessedGroups);
            localStorage.setItem(`terms-${gameSessionId}`, JSON.stringify(updatedTerms));
            localStorage.setItem(`guessedGroups-${gameSessionId}`, JSON.stringify(updatedGuessedGroups));
            setSelectedTerms([]);

          if (guessedGroups.length + 1 === correctGroups.length) {
            setGameOver(true);
            setUserWon(true);
            setPopupMessage(getVictoryMessage(mistakes));
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                setShowResultsPopup(true);
                setWins(prevWins => {
                  const newWins = prevWins + 1;
                  localStorage.setItem('wins', JSON.stringify(newWins));
                  return newWins;
                });
                setGamesPlayed(prevGames => {
                  const newGames = prevGames + 1;
                  localStorage.setItem('gamesPlayed', JSON.stringify(newGames));
                  return newGames;
                });
            }, 1000);
          }
        }
      setIsSubmitting(false);
    }, 1700);
  };

  
  

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return size;
  }

  useEffect(() => {
    if (selectedTerms.length > 0 && isSubmitting) {
      selectedTerms.forEach((term, index) => {
        setTimeout(() => {
          setAnimateIndex(index);
        }, index * 300);
      });
  
      const lastAnimationDelay = selectedTerms.length * 500;
      const timeoutId = setTimeout(() => {
        setAnimateIndex(null);
        setIsSubmitting(false);
      }, lastAnimationDelay);
  
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitting, selectedTerms]);
  
  
  useEffect(() => {
    if (animateIndex !== null) {
      const timeoutId = setTimeout(() => {
        setAnimateIndex(null);
      }, 500);
  
      return () => clearTimeout(timeoutId);
    }
  }, [animateIndex]);

  useEffect(() => {
    if (guessIncorrect) {
      const timeoutId = setTimeout(() => {
        setShake(false);
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [guessIncorrect]);

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => {
        setShake(false);
        setGuessIncorrect(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [shake]);


  
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

  useEffect(() => {
    setTerms(shuffleArray([...initialTerms]));
  }, []);
  
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
  const message = userWon ? getVictoryMessage(mistakes) : "Next Time!";
    
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

  const renderStatsPopup = () => {
    const winPercentage = gamesPlayed > 0 ? ((wins / gamesPlayed) * 100).toFixed(2) : 0;
    return (
      <div className="stats-popup" onClick={() => setShowStatsPopup(false)}>
        <div className="stats-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setShowStatsPopup(false)}>X</button>
          <h2 className="stats-header">Your Stats</h2>
          <div className="stats-section">
            <div className="stats-item">
              <div className="stats-value">{wins}</div>
              <div className="stats-label">Wins</div>
            </div>
            <div className="stats-item">
              <div className="stats-value">{gamesPlayed}</div>
              <div className="stats-label">Games Played</div>
            </div>
            <div className="stats-item">
              <div className="stats-value">{winPercentage}%</div>
              <div className="stats-label">Win Percentage</div>
            </div>
          </div>
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
  

  return (
    <div className="connections-game">
    <div className="header-container">
      <h1>Create four groups of four!</h1>
      <button className="stats-button" onClick={() => setShowStatsPopup(true)}>Stats</button>
    </div>
    {showPopup && <div className="popup-message">{popupMessage}</div>}
    <div className="guessed-groups">
      {guessedGroups.map((group, index) => (
        <div 
          key={index} 
          className="guessed-group-combined"
          style={{ backgroundColor: group.color }}
        >
          <div className="group-images">
            {group.terms.map((term, termIndex) => (
              <div key={termIndex} className="player-image-container">
                <img src={playerImages[term]} alt={term} className="guessed-player-image" />
                <div className="player-name-overlay">{term.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <div className="group-description">{group.description}</div>
        </div>
      ))}
    </div>

    <div className="terms-grid" style={{ gridTemplateColumns: width > 0 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)' }}>
      {terms.map((term, index) => {
        let imgSrc = playerImages[term];
          let isSelected = selectedTerms.includes(term);
          let isAnimating = selectedTerms.indexOf(term) === animateIndex;
          let shouldShake = isSelected && guessIncorrect;
          let isCooldown = cooldown;

    return (
      <div key={index} 
           className={`term-block ${isSelected ? 'selected' : ''} ${isAnimating ? 'jump-animation' : ''} ${shouldShake ? 'shake-animation' : ''} ${isSubmitting ? 'no-hover' : ''} ${isCooldown ? 'no-hover' : ''}`} 
           onClick={() => handleTermClick(term)}
           style={{ cursor: isSubmitting ? 'default' : 'pointer' }}>
        <img src={imgSrc} className="term-image" alt={term} />
        <div className="text-overlay">{term}</div>
      </div>

          );
      })}
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
        <button 
          onClick={handleShuffle}
          disabled={isSubmitting || shake || cooldown}
          style={{ opacity: (isSubmitting || shake || cooldown) ? 0.5 : 1 }}>
          Shuffle
        </button>

        <button 
          onClick={() => setSelectedTerms([])}
          disabled={isSubmitting || shake || cooldown || selectedTerms.length === 0}
          style={{ opacity: (isSubmitting || shake || cooldown) ? 0.5 : 1 }}>
          Deselect All
        </button>

        <button 
          onClick={handleSubmit}
          disabled={isSubmitting || shake || cooldown || selectedTerms.length !== 4}
          style={{ opacity: (isSubmitting || shake || cooldown) ? 0.5 : 1 }}>
          Submit
        </button>
      </div>
    ) : (
      <div className="game-over-controls">
        <button className="game-button" onClick={() => setShowResultsPopup(true)}>View Results</button>
      </div>
    )}
    {showResultsPopup && renderResultsPopup()}
    {showStatsPopup && renderStatsPopup()}
    <div className="footer-links">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScf3nrR79wVz0ZjBy6LaH18Xi9gH6RfwU8GMd3-O-luSJjB-Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="suggestions-link">Suggestions</a>
        <a href="https://www.instagram.com/ohconnections" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.tiktok.com/@mlbgamepredictor" target="_blank" rel="noopener noreferrer" className="tiktok-link">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
      </div>
      <p className="image-attribution">All pictures belong to ESPN or MLB</p>
  </div>
);

  
};

export default ConnectionsPage;