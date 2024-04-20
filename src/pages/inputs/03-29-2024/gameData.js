import giancarloStanton from './giancarlostanton.png';
import princeFielder from './princefielder.png';
import joseBautista from './josebautista.png';
import markMcGwire from './markmcgwire.png';
import sammySosa from './sammysosa.png';
import georgeBell from './georgebell.png';
import kenGriffeyJr from './kengriffeyjr.png';
import jimThome from './jimthome.png';
import cecilFielder from './cecilfielder.png';
import ryanVogelsong from './ryanvogelsong.png';
import colbyLewis from './colbylewis.png';
import milesMikolas from './milesmikolas.png';
import mikeMatheny from './mikematheny.png';
import bruceBochy from './brucebochy.png';
import joeGirardi from './joegirardi.png';
import craigCounsell from './craigcounsell.png';

export const playerImages = {
  'Giancarlo Stanton': giancarloStanton,
  'Prince Fielder': princeFielder,
  'Jose Bautista': joseBautista,
  'Mark McGwire': markMcGwire,
  'Sammy Sosa': sammySosa,
  'George Bell': georgeBell,
  'Ken Griffey Jr.': kenGriffeyJr,
  'Jim Thome': jimThome,
  'Cecil Fielder': cecilFielder,
  'Ryan Vogelsong': ryanVogelsong,
  'Colby Lewis': colbyLewis,
  'Miles Mikolas': milesMikolas,
  'Mike Matheny': mikeMatheny,
  'Bruce Bochy': bruceBochy,
  'Joe Girardi': joeGirardi,
  'Craig Counsell': craigCounsell
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

const initialTermsUnshuffled = ['Giancarlo Stanton', 'Prince Fielder', 'Jose Bautista', 'Mark McGwire', 'Sammy Sosa', 'George Bell', 'Ken Griffey Jr.', 'Jim Thome', 'Cecil Fielder', 'Ryan Vogelsong', 'Colby Lewis', 'Miles Mikolas', 'Mike Matheny', 'Bruce Bochy', 'Joe Girardi', 'Craig Counsell'];
export const initialTerms = shuffleArray([...initialTermsUnshuffled]);

export const correctGroups = [
  { number: 15, 
    description: 'PLAYERS WITH 50+ HOME RUNS IN A SEASON', 
    terms: ['Giancarlo Stanton', 'Prince Fielder', 'Jose Bautista', 'Mark McGwire'],  
    color: '#4CAF50' },

  { number: 15,
    description: 'PLAYERS WHO\'VE PLAYED FOR BOTH CHICAGO TEAMS', 
    terms: ['Sammy Sosa', 'George Bell', 'Ken Griffey Jr.', 'Jim Thome'],  
    color: '#e5de00' },

  { number: 15, 
    description: 'MLB PLAYERS WHO PLAYED IN THE NPB', 
    terms: ['Cecil Fielder', 'Ryan Vogelsong', 'Colby Lewis', 'Miles Mikolas'], 
    color: '#e27602' },
  
  { number: 15, 
    description: 'MLB MANAGERS WHO WERE FORMER CATCHERS', 
    terms: ['Mike Matheny', 'Bruce Bochy', 'Joe Girardi', 'Craig Counsell'], 
    color: '#de0a26' }
];