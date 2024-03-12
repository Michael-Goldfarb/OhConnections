import freddieFreeman from './freddiefreeman.png';
import shoheiOhtani from './shoheiohtani.png';
import ronaldAcunaJr from './ronaldacunajr.png';
import albertPujols from './albertPujols.png';
import babeRuth from './babeRuth.jpg';
import hankAaron from './hankAaron.jpg';
import barryBonds from './barryBonds.jpg';
import fernandoTatisJr from './fernandoTatisJr.png';
import cavanBiggio from './cavanBiggio.png';
import boBichette from './boBichette.png';
import kebryanHayes from './kebryanHayes.png';
import aaronJudge from './aaronJudge.png';
import nolanArenado from './nolanArenado.png';
import adamJones from './adamJones.png';
import christianYelich from './christianYelich.png';
import ericHosmer from './ericHosmer.png';


export const playerImages = {
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

  const initialTermsUnshuffled = ['Albert Pujols', 'Babe Ruth', 'Hank Aaron', 'Barry Bonds', 'Ronald Acuña Jr.', 'Shohei Ohtani', 'Aaron Judge', 'Freddie Freeman', 'Fernando Tatis Jr.', 'Ke\'Bryan Hayes', 'Cavan Biggio', 'Bo Bichette', 'Adam Jones', 'Christian Yelich', 'Nolan Arenado', 'Eric Hosmer'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 1, 
        description: '700+ HOME RUNS', 
        terms: ['Babe Ruth', 'Albert Pujols', 'Hank Aaron', 'Barry Bonds'],  
        color: '#4CAF50' },

    { number: 1,
         description: '2023 ALL STAR GAME STARTERS', 
         terms: ['Ronald Acuña Jr.', 'Shohei Ohtani', 'Aaron Judge', 'Freddie Freeman'],  
         color: '#e5de00' },

    { number: 1, 
        description: 'SONS OF FORMER MLB PLAYERS', 
        terms: ['Fernando Tatis Jr.', 'Ke\'Bryan Hayes', 'Cavan Biggio', 'Bo Bichette'], 
        color: '#e27602' },
    
    { number: 1, 
        description: '2017 TEAM USA WBC PLAYERS', 
        terms: ['Adam Jones', 'Christian Yelich', 'Nolan Arenado', 'Eric Hosmer'], 
        color: '#de0a26' }]
  
  