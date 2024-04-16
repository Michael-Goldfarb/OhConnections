import bobbyWittJr from './bobbywittjr.png';
import corbinCarroll from './corbincarroll.png';
import ronaldAcunaJr from './ronaldacunajr.png';
import esteuryRuiz from './esteuryruiz.png';
import jordanMontgomery from './jordanmontgomery.png';
import blakeSnell from './blakesnell.png';
import codyBellinger from './codybellinger.png';
import mattChapman from './mattchapman.png';
import alexBregman from './alexbregman.png';
import djLemahieu from './djlemahieu.png';
import aaronNola from './aaronnola.png';
import paulSkenes from './paulskenes.png';
import jtRealmuto from './jtrealmuto.png';
import willSmith from './willsmith.png';
import adleyRutschman from './adleyrutschman.png';
import seanMurphy from './seanmurphy.png';


export const playerImages = {
  'Blake Snell': blakeSnell, 
  'Cody Bellinger': codyBellinger,
  'Matt Chapman': mattChapman, 
  'Jordan Montgomery': jordanMontgomery,
  'Esteury Ruiz': esteuryRuiz, 
  'Ronald Acuna Jr.': ronaldAcunaJr, 
  'Corbin Carroll': corbinCarroll, 
  'Bobby Witt Jr.': bobbyWittJr, 
  'Alex Bregman': alexBregman, 
  'DJ Lemahieu': djLemahieu, 
  'Aaron Nola': aaronNola, 
  'Paul Skenes': paulSkenes, 
  'JT Realmuto': jtRealmuto, 
  'Will Smith': willSmith, 
  'Adley Rutschman': adleyRutschman, 
  'Sean Murphy': seanMurphy
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

  const initialTermsUnshuffled = ['Alex Bregman', 'DJ Lemahieu', 'Aaron Nola', 'Paul Skenes', 'JT Realmuto', 'Will Smith', 'Adley Rutschman', 'Sean Murphy', 'Cody Bellinger', 'Blake Snell', 'Matt Chapman', 'Jordan Montgomery', 'Esteury Ruiz', 'Ronald Acuna Jr.', 'Corbin Carroll', 'Bobby Witt Jr.'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);

  export const correctGroups = [
    { number: 12, 
        description: 'CATCHERS', 
        terms: ['JT Realmuto', 'Will Smith', 'Adley Rutschman', 'Sean Murphy'],  
        color: '#4CAF50' },

    { number: 12,
         description: '2023 STEALS LEADERS', 
         terms: ['Esteury Ruiz', 'Ronald Acuna Jr.', 'Corbin Carroll', 'Bobby Witt Jr.'],  
         color: '#e5de00' },

    { number: 12, 
        description: 'LSU PLAYERS', 
        terms: ['Alex Bregman', 'DJ Lemahieu', 'Aaron Nola', 'Paul Skenes'], 
        color: '#e27602' },
    
    { number: 12, 
        description: 'SCOTT BORAS CLIENTS', 
        terms: ['Cody Bellinger', 'Blake Snell', 'Matt Chapman', 'Jordan Montgomery'], 
        color: '#de0a26' }]
  
  