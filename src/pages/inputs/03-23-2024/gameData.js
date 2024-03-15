import joseBautista from './josebautista.png';
import raDickey from './radickey.png';
import brianDozier from './briandozier.png';
import justinTurner from './justinturner.png';
import boJackson from './bojackson.png';
import kirkGibson from './kirkgibson.png';
import deionSanders from './deionsanders.png';
import daveWinfield from './davewinfield.png';
import miguelCabrera from './miguelcabrera.png';
import carlYastrzemski from './carlyastrzemski.png';
import frankRobinson from './frankrobinson.png';
import mickeyMantle from './mickeymantle.png';
import claytonKershaw from './claytonkershaw.png';
import justinVerlander from './justinverlander.png';
import johanSantana from './johansantana.png';
import shaneBieber from './shanebieber.png';


export const playerImages = {
   'José Bautista': joseBautista,
   'R.A. Dickey': raDickey,
   'Brian Dozier': brianDozier, 
   'Justin Turner': justinTurner, 
   'Bo Jackson': boJackson, 
   'Kirk Gibson': kirkGibson, 
   'Deion Sanders': deionSanders, 
   'Dave Winfield': daveWinfield, 
   'Miguel Cabrera': miguelCabrera, 
   'Carl Yastrzemski': carlYastrzemski, 
   'Frank Robinson': frankRobinson, 
   'Mickey Mantle': mickeyMantle, 
   'Clayton Kershaw': claytonKershaw, 
   'Justin Verlander': justinVerlander, 
   'Johan Santana': johanSantana, 
   'Shane Bieber': shaneBieber
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

  const initialTermsUnshuffled = ['José Bautista', 'R.A. Dickey', 'Brian Dozier', 'Justin Turner', 'Deion Sanders', 'Bo Jackson', 'Kirk Gibson','Dave Winfield', 'Miguel Cabrera', 'Carl Yastrzemski', 'Frank Robinson', 'Mickey Mantle', 'Clayton Kershaw', 'Justin Verlander', 'Johan Santana', 'Shane Bieber'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 9, 
        description: 'PITCHING TRIPLE CROWN WINNERS', 
        terms: ['Clayton Kershaw', 'Justin Verlander', 'Johan Santana', 'Shane Bieber'],  
        color: '#4CAF50' },

    { number: 9,
         description: 'BATTING TRIPLE CROWN WINNERS', 
         terms: ['Miguel Cabrera', 'Carl Yastrzemski', 'Frank Robinson', 'Mickey Mantle'],  
         color: '#e5de00' },

    { number: 9, 
        description: 'PLAYERS DRAFTED BY THE NFL', 
        terms: ['Deion Sanders', 'Bo Jackson', 'Kirk Gibson','Dave Winfield'], 
        color: '#e27602' },
    
    { number: 9, 
        description: 'ALL STARS FOR THE FIRST TIME AFTER AGE 30', 
        terms: ['José Bautista', 'R.A. Dickey', 'Brian Dozier', 'Justin Turner'], 
        color: '#de0a26' }]
  
  