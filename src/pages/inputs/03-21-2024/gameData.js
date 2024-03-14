import johnSmoltz from './johnsmoltz.png';
import ajPierzynski from './ajpierzynski.png';
import davidOrtiz from './davidortiz.png';
import adamWainwright from './adamwainwright.png';
import kenGriffeyJr from './kengriffeyjr.png';
import joshDonaldson from './joshdonaldson.png';
import yasielPuig from './yasielpuig.png';
import davidWright from './davidwright.png';
import tylerMatzek from './tylermatzek.png';
import danielBard from './danielbard.png';
import jonLester from './jonlester.png';
import rickAnkiel from './rickankiel.png';
import thurmanMunson from './thurmanmunson.png';
import louGehrig from './lougehrig.png';
import donMattingly from './donmattingly.png';
import derekJeter from './derekjeter.png';


export const playerImages = {
    'Derek Jeter': derekJeter,
    'Don Mattingly': donMattingly,
    'Lou Gehrig': louGehrig, 
    'Thurman Munson': thurmanMunson, 
    'Rick Ankiel': rickAnkiel, 
    'Jon Lester': jonLester, 
    'Daniel Bard': danielBard, 
    'Tyler Matzek': tylerMatzek, 
    'David Wright': davidWright, 
    'Yasiel Puig': yasielPuig, 
    'Josh Donaldson': joshDonaldson, 
    'Ken Griffey Jr.': kenGriffeyJr, 
    'Adam Wainwright': adamWainwright, 
    'David Ortiz': davidOrtiz, 
    'A. J. Pierzynski': ajPierzynski, 
    'John Smoltz': johnSmoltz
  };


  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
  };   

  const initialTermsUnshuffled = ['Adam Wainwright', 'David Ortiz', 'A. J. Pierzynski', 'John Smoltz', 'Derek Jeter', 'Don Mattingly', 'Lou Gehrig', 'Thurman Munson', 'Rick Ankiel', 'Jon Lester', 'Daniel Bard', 'Tyler Matzek', 'David Wright', 'Yasiel Puig', 'Josh Donaldson', 'Ken Griffey Jr.'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 7, 
        description: 'YANKEES CAPTAINS', 
        terms: ['Derek Jeter', 'Don Mattingly', 'Lou Gehrig', 'Thurman Munson'],  
        color: '#4CAF50' },

    { number: 7,
         description: 'PLAYERS WHO HAD THE YIPS', 
         terms: ['Rick Ankiel', 'Jon Lester', 'Daniel Bard', 'Tyler Matzek'],  
         color: '#e5de00' },

    { number: 7, 
        description: 'MLB THE SHOW COVER ATHLETES', 
        terms: ['David Wright', 'Yasiel Puig', 'Josh Donaldson', 'Ken Griffey Jr.'], 
        color: '#e27602' },
    
    { number: 7, 
        description: 'PLAYERS TURNED BROADCASTER/ANALYST', 
        terms: ['Adam Wainwright', 'David Ortiz', 'A. J. Pierzynski', 'John Smoltz'], 
        color: '#de0a26' }]
  
  