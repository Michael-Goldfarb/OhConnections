import jackieRobinson from './jackierobinson.png';
import marianoRivera from './marianorivera.png';
import tedWilliams from './tedwilliams.png';
import robertoClemente from './robertoclemente.png';
import jacobDeGrom from './jacobdegrom.png';
import shaneBieber from './shanebieber.png';
import blakeSnell from './blakesnell.png';
import trevorBauer from './trevorbauer.png';
import peteRose from './peterose.png';
import derekJeter from './derekjeter.png';
import hankAaron from './hankAaron.jpg';
import willieMays from './williemays.png';
import joAdell from './joadell.png';
import randyArozarena from './randyarozarena.png';
import kestonHiura from './kestonhiura.png';
import tyFrance from './tyfrance.png';

export const playerImages = {
  'Jackie Robinson': jackieRobinson,
  'Mariano Rivera': marianoRivera,
  'Ted Williams': tedWilliams,
  'Roberto Clemente': robertoClemente,
  'Jacob deGrom': jacobDeGrom,
  'Shane Bieber': shaneBieber,
  'Blake Snell': blakeSnell,
  'Trevor Bauer': trevorBauer,
  'Pete Rose': peteRose,
  'Derek Jeter': derekJeter,
  'Hank Aaron': hankAaron,
  'Willie Mays': willieMays,
  'Jo Adell': joAdell,
  'Randy Arozarena': randyArozarena,
  'Keston Hiura': kestonHiura,
  'Ty France': tyFrance
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

const initialTermsUnshuffled = ['Jackie Robinson', 'Mariano Rivera', 'Ted Williams', 'Roberto Clemente', 'Jacob deGrom', 'Shane Bieber', 'Blake Snell', 'Trevor Bauer', 'Pete Rose', 'Derek Jeter', 'Hank Aaron', 'Willie Mays', 'Jo Adell', 'Randy Arozarena', 'Keston Hiura', 'Ty France'];
export const initialTerms = shuffleArray([...initialTermsUnshuffled]);

export const correctGroups = [
  { number: 14, 
    description: 'FAMOUS NUMBER RETIREMENTS', 
    terms: ['Jackie Robinson', 'Mariano Rivera', 'Ted Williams', 'Roberto Clemente'],  
    color: '#4CAF50' },

  { number: 14,
    description: 'CY YOUNG WINNERS', 
    terms: ['Jacob deGrom', 'Shane Bieber', 'Blake Snell', 'Trevor Bauer'],  
    color: '#e5de00' },

  { number: 14, 
    description: 'PLAYERS WITH OVER 3000 HITS', 
    terms: ['Pete Rose', 'Derek Jeter', 'Hank Aaron', 'Willie Mays'], 
    color: '#e27602' },
  
  { number: 14, 
    description: 'FORMER TRIPLE-A MVPS', 
    terms: ['Jo Adell', 'Randy Arozarena', 'Keston Hiura', 'Ty France'], 
    color: '#de0a26' }
];