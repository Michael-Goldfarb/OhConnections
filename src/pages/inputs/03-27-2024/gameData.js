import claytonKershaw from './claytonkershaw.png';
import chrisSale from './chrissale.png';
import hyunjinRyu from './hyunjinryu.png';
import madisonBumgarner from './madisonbumgarner.png';
import nolanArenado from './nolanArenado.png';
import yadierMolina from './yadiermolina.png';
import mookieBetts from './mookiebetts.png';
import nickAhmed from './nickahmed.png';
import georgeSpringer from './georgespringer.png';
import treaTurner from './treaturner.png';
import brockHolt from './brockholt.png';
import christianYelich from './christianYelich.png';
import albertPujols from './albertPujols.png';
import jimmyRollins from './jimmyrollins.png';
import barryBonds from './barryBonds.jpg';
import ryanHoward from './ryanhoward.png';


export const playerImages = {
  'Clayton Kershaw': claytonKershaw, 
  'Chris Sale': chrisSale,
  'Hyun-jin Ryu': hyunjinRyu, 
  'Madison Bumgarner': madisonBumgarner,
  'Nolan Arenado': nolanArenado, 
  'Yadier Molina': yadierMolina, 
  'Mookie Betts': mookieBetts, 
  'Nick Ahmed': nickAhmed, 
  'George Springer': georgeSpringer, 
  'Trea Turner': treaTurner, 
  'Brock Holt': brockHolt, 
  'Christian Yelich': christianYelich, 
  'Albert Pujols': albertPujols, 
  'Jimmy Rollins': jimmyRollins, 
  'Barry Bonds': barryBonds, 
  'Ryan Howard': ryanHoward
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

  const initialTermsUnshuffled = ['Clayton Kershaw', 'Chris Sale', 'Hyun-jin Ryu', 'Madison Bumgarner', 'Nolan Arenado', 'Yadier Molina', 'Mookie Betts', 'Nick Ahmed', 'George Springer', 'Trea Turner', 'Brock Holt', 'Christian Yelich', 'Albert Pujols', 'Jimmy Rollins', 'Barry Bonds', 'Ryan Howard'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);

  export const correctGroups = [
    { number: 13, 
        description: 'ACTIVE LEFT-HANDED PITCHERS', 
        terms: ['Clayton Kershaw', 'Chris Sale', 'Hyun-jin Ryu', 'Madison Bumgarner'],  
        color: '#4CAF50' },

    { number: 13,
         description: 'MULTIPLE GOLD GLOVES SINCE 2010', 
         terms: ['Nolan Arenado', 'Yadier Molina', 'Mookie Betts', 'Nick Ahmed'],  
         color: '#e5de00' },

    { number: 13, 
        description: 'HAVE HIT FOR THE CYCLE', 
        terms: ['George Springer', 'Trea Turner', 'Brock Holt', 'Christian Yelich'], 
        color: '#e27602' },
    
    { number: 13, 
        description: 'NL MVPS FROM THE 2000S', 
        terms: ['Albert Pujols', 'Jimmy Rollins', 'Barry Bonds', 'Ryan Howard'], 
        color: '#de0a26' }]
  
  