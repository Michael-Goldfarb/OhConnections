import barryBonds from './barrybonds.jpg';
import bryceHarper from './bryceharper.png';
import dansbySwanson from './dansbyswanson.png';
import joseCanseco from './josecanseco.png';
import alexRodriguez from './alexrodriguez.png';
import alfonsoSoriano from './alfonsosoriano.png';
import carlosCorrea from './carloscorrea.png';
import spencerTorkelson from './spencertorkelson.png';
import kyleLewis from './kylelewis.png';
import randyArozarena from './randyarozarena.png';
import dereckRodriguez from './dereckrodriguez.png';
import gunnarHenderson from './gunnarhenderson.png';
import graysonRodriguez from './graysonrodriguez.png';
import julioRodriguez from './juliorodriguez.png';
import eduardoRodriguez from './eduardorodriguez.png';
import joelyRodriguez from './joelyrodriguez.png';


export const playerImages = {
    'Jose Canseco': joseCanseco,
    'Barry Bonds': barryBonds,
    'Alex Rodriguez': alexRodriguez, 
    'Alfonso Soriano': alfonsoSoriano, 
    'Dansby Swanson': dansbySwanson, 
    'Carlos Correa': carlosCorrea, 
    'Spencer Torkelson': spencerTorkelson, 
    'Bryce Harper': bryceHarper, 
    'Kyle Lewis': kyleLewis, 
    'Randy Arozarena': randyArozarena, 
    'Julio Rodríguez': julioRodriguez, 
    'Gunnar Henderson': gunnarHenderson, 
    'Grayson Rodriguez': graysonRodriguez, 
    'Dereck Rodríguez': dereckRodriguez, 
    'Eduardo Rodriguez': eduardoRodriguez, 
    'Joely Rodríguez': joelyRodriguez
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

  const initialTermsUnshuffled = ['Jose Canseco', 'Barry Bonds', 'Alex Rodriguez', 'Alfonso Soriano', 'Dansby Swanson', 'Carlos Correa', 'Spencer Torkelson', 'Bryce Harper', 'Kyle Lewis', 'Randy Arozarena', 'Dereck Rodríguez', 'Gunnar Henderson', 'Grayson Rodriguez', 'Julio Rodríguez', 'Eduardo Rodriguez', 'Joely Rodríguez'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 5, 
        description: 'LAST NAME RODRIGUEZ', 
        terms: ['Grayson Rodriguez', 'Dereck Rodríguez', 'Eduardo Rodriguez', 'Joely Rodríguez'],  
        color: '#4CAF50' },

    { number: 5,
         description: 'RECENT AL ROOKIES OF THE YEAR', 
         terms: ['Kyle Lewis', 'Randy Arozarena', 'Julio Rodríguez', 'Gunnar Henderson'],  
         color: '#e5de00' },

    { number: 5, 
        description: '#1 OVERALL PICKS', 
        terms: ['Dansby Swanson', 'Carlos Correa', 'Spencer Torkelson', 'Bryce Harper'], 
        color: '#e27602' },
    
    { number: 5, 
        description: '40-40 SEASON', 
        terms: ['Jose Canseco', 'Barry Bonds', 'Alex Rodriguez', 'Alfonso Soriano'], 
        color: '#de0a26' }]
  
  