import React, { useState, useEffect, Component } from 'react';
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
import albertPujols from './inputs/03-15-2024/albertPujols.png';
import babeRuth from './inputs/03-15-2024/babeRuth.jpg';
import hankAaron from './inputs/03-15-2024/hankAaron.jpg';
import barryBonds from './inputs/03-15-2024/barryBonds.jpg';
import fernandoTatisJr from './inputs/03-15-2024/fernandoTatisJr.png';
import cavanBiggio from './inputs/03-15-2024/cavanBiggio.png';
import boBichette from './inputs/03-15-2024/boBichette.png';
import kebryanHayes from './inputs/03-15-2024/kebryanHayes.png';
import aaronJudge from './inputs/03-15-2024/aaronJudge.png';
import nolanArenado from './inputs/03-15-2024/nolanArenado.png';
import adamJones from './inputs/03-15-2024/adamJones.png';
import christianYelich from './inputs/03-15-2024/christianYelich.png';
import ericHosmer from './inputs/03-15-2024/ericHosmer.png';




const ConnectionsPage = () => {
  const playerImages = {
    'Albert Pujols': albertPujols,
    'Babe Ruth': babeRuth,
    'Hank Aaron': hankAaron, 
    'Barry Bonds': barryBonds, 
    'Ronald Acuña Jr.': ronaldAcunaJr, 
    'Shohei Ohtani': shoheiOhtani, 
    'Aaron Judge': aaronJudge, 
    'Freddie Freeman': freddieFreeman, 
    'Fernando Tatis Jr.': fernandoTatisJr, 
    'Ke\'Bryan Hayes': kebryanHayes, 
    'Cavan Biggio': cavanBiggio, 
    'Bo Bichette': boBichette, 
    'Adam Jones': adamJones, 
    'Christian Yelich': christianYelich, 
    'Nolan Arenado': nolanArenado, 
    'Eric Hosmer': ericHosmer
  };
  const initialTerms = ['Albert Pujols', 'Babe Ruth', 'Hank Aaron', 'Barry Bonds', 'Ronald Acuña Jr.', 'Shohei Ohtani', 'Aaron Judge', 'Freddie Freeman', 'Fernando Tatis Jr.', 'Ke\'Bryan Hayes', 'Cavan Biggio', 'Bo Bichette', 'Adam Jones', 'Christian Yelich', 'Nolan Arenado', 'Eric Hosmer'];
  const correctGroups = [
    { number: 1, description: '700+ HOME RUNS', terms: ['Babe Ruth', 'Albert Pujols', 'Hank Aaron', 'Barry Bonds'],  color: '#4CAF50' },
    { number: 1, description: '2023 ALL STAR GAME STARTERS', terms: ['Ronald Acuña Jr.', 'Shohei Ohtani', 'Aaron Judge', 'Freddie Freeman'],  color: '#e5de00' },
    { number: 1, description: 'SONS OF FORMER MLB PLAYERS', terms: ['Fernando Tatis Jr.', 'Ke\'Bryan Hayes', 'Cavan Biggio', 'Bo Bichette'], color: '#e27602' },
    { number: 1, description: '2017 TEAM USA WBC PLAYERS', terms: ['Adam Jones', 'Christian Yelich', 'Nolan Arenado', 'Eric Hosmer'], color: '#de0a26' }]
  
  const [selectedTerms, setSelectedTerms] = useState([]);
  const [currentJumpIndex, setCurrentJumpIndex] = useState(null);
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [guessIncorrect, setGuessIncorrect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [width, height] = useWindowSize();
  // console.log(width, height);
  const [readyToShowPopUp, setReadyToShowPopUp] = useState(false);
  const [nextPuzzleCountdown, setNextPuzzleCountdown] = useState('');
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const [animateIndex, setAnimateIndex] = useState(null);
  const [shake, setShake] = useState(false);
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
    if (isSubmitting || gameOver) return;
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
    if (gameOver || mistakes <= 0 || selectedTerms.length !== 4) {
        return;
    }

    setIsSubmitting(true);

    const currentSetSorted = [...selectedTerms].sort();
    const currentSetString = currentSetSorted.join(',');

    setTimeout(() => {
      
      if (submittedSets.includes(currentSetString)) {
        setPopupMessage("You cannot guess the same 4 players twice.");
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            setIsSubmitting(false);
        }, 2000);
        return;
    }

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
            }, 2000);
        }
        setGuessIncorrect(false);
      }, 850);
        } else {
          const updatedGroup = { ...foundGroup, terms: selectedTerms };
          setGuessedGroups([...guessedGroups, updatedGroup]);
          setTerms(terms.filter(term => !foundGroup.terms.includes(term)));
          setSelectedTerms([]);

          if (guessedGroups.length + 1 === correctGroups.length) {
            setGameOver(true);
            setUserWon(true);
            setPopupMessage(getVictoryMessage(mistakes));
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                setShowResultsPopup(true);
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
        let imgSrc = '';
        switch (term) {
          case 'Albert Pujols': imgSrc = albertPujols; break;
          case 'Barry Bonds': imgSrc = barryBonds; break;
          case 'Babe Ruth': imgSrc = babeRuth; break;
          case 'Hank Aaron': imgSrc = hankAaron; break;
          case 'Ke\'Bryan Hayes': imgSrc = kebryanHayes; break;
          case 'Bo Bichette': imgSrc = boBichette; break;
          case 'Cavan Biggio': imgSrc = cavanBiggio; break;
          case 'Fernando Tatis Jr.': imgSrc = fernandoTatisJr; break;
          case 'Ronald Acuña Jr.': imgSrc = ronaldAcunaJr; break;
          case 'Shohei Ohtani': imgSrc = shoheiOhtani; break;
          case 'Freddie Freeman': imgSrc = freddieFreeman; break;
          case 'Aaron Judge': imgSrc = aaronJudge; break;
          case 'Eric Hosmer': imgSrc = ericHosmer; break;
          case 'Adam Jones': imgSrc = adamJones; break;
          case 'Christian Yelich': imgSrc = christianYelich; break;
          case 'Nolan Arenado': imgSrc = nolanArenado; break;
          default: imgSrc = miguelCabrera;
        }
          let isSelected = selectedTerms.includes(term);
          let isAnimating = selectedTerms.indexOf(term) === animateIndex;
          let shouldShake = isSelected && guessIncorrect;

    return (
      <div key={index} 
           className={`term-block ${isSelected ? 'selected' : ''} ${isAnimating ? 'jump-animation' : ''} ${shouldShake ? 'shake-animation' : ''}`} 
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
  disabled={isSubmitting}
  style={{ opacity: isSubmitting ? 0.5 : 1 }}>
  Shuffle
</button>

<button 
  onClick={() => setSelectedTerms([])} 
  disabled={isSubmitting || selectedTerms.length === 0}
  style={{ opacity: isSubmitting ? 0.5 : 1 }}>
  Deselect All
</button>

<button 
  onClick={handleSubmit} 
  disabled={isSubmitting || selectedTerms.length !== 4}
  style={{ opacity: isSubmitting ? 0.5 : 1 }}>
  Submit
</button>
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