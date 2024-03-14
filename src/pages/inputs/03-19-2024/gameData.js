import rogerClemens from './rogerclemens.png';
import philNiekro from './niekro1.png';
import timWakefield from './timwakefield.png';
import raDickey from './radickey.png';
import stevenWright from './stevenwright.png';
import steveAvery from './steveavery.png';
import gregMaddux from './gregmaddux.png';
import johnSmoltz from './johnsmoltz.png';
import tomGlavine from './tomglavine.png';
import kerryWood from './kerrywood.png';
import maxScherzer from './maxscherzer.png';
import randyJohnson from './randyjohnson.png';
import maxFried from './maxfried.png';
import jackFlaherty from './jackflaherty.png';
import peteCrowArmstrong from './pca.png';
import lucasGiolito from './lucasgiolito.png';


export const playerImages = {
    'Tim Wakefield': timWakefield,
    'R.A. Dickey': raDickey,
    'Phil Niekro': philNiekro, 
    'Steven Wright': stevenWright, 
    'Steve Avery': steveAvery, 
    'Greg Maddux': gregMaddux, 
    'John Smoltz': johnSmoltz, 
    'Tom Glavine': tomGlavine, 
    'Kerry Wood': kerryWood, 
    'Max Scherzer': maxScherzer, 
    'Randy Johnson': randyJohnson, 
    'Roger Clemens': rogerClemens, 
    'Jack Flaherty': jackFlaherty, 
    'Max Fried': maxFried, 
    'Pete Crow-Armstrong': peteCrowArmstrong, 
    'Lucas Giolito': lucasGiolito
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

  const initialTermsUnshuffled = ['Pete Crow-Armstrong', 'Lucas Giolito', 'Jack Flaherty', 'Max Fried', 'Roger Clemens', 'Randy Johnson', 'Kerry Wood', 'Max Scherzer', 'Steve Avery', 'Greg Maddux', 'John Smoltz', 'Tom Glavine', 'R.A. Dickey', 'Phil Niekro', 'Tim Wakefield', 'Steven Wright'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 5, 
        description: 'KNUCKLEBALLERS', 
        terms: ['R.A. Dickey', 'Phil Niekro', 'Tim Wakefield', 'Steven Wright'],  
        color: '#4CAF50' },

    { number: 5,
         description: 'BRAVES 1990S STARTING PITCHERS', 
         terms: ['Greg Maddux', 'John Smoltz', 'Tom Glavine', 'Steve Avery'],  
         color: '#e5de00' },

    { number: 5, 
        description: '20 STRIKEOUTS IN ONE GAME', 
        terms: ['Max Scherzer', 'Kerry Wood', 'Roger Clemens', 'Randy Johnson'], 
        color: '#e27602' },
    
    { number: 5, 
        description: 'HARVARD-WESTLAKE HS ALUMS', 
        terms: ['Jack Flaherty', 'Lucas Giolito', 'Max Fried', 'Pete Crow-Armstrong'], 
        color: '#de0a26' }]
  
  