import spencerTurnbull from './spencerturnbull.png';
import joeMusgrove from './joemusgrove.png';
import johnMeans from './johnmeans.png';
import coreyKluber from './coreykluber.png';
import franciscoLindor from './franciscolindor.png';
import yasmaniGrandal from './yasmanigrandal.png';
import ozzieAlbies from './ozziealbies.png';
import jeimerCandelario from './jeimercandelario.png';
import dellinBetances from './dellinbetances.png';
import neilWalker from './neilwalker.png';
import justinWilson from './justinwilson.png';
import toddFrazier from './toddfrazier.png';
import juanSoto from './juansoto.png';
import treaTurner from './treaturner.png';
import anthonyRendon from './anthonyrendon.png';
import patrickCorbin from './patrickcorbin.png';


export const playerImages = {
   'Spencer Turnbull': spencerTurnbull,
   'Joe Musgrove': joeMusgrove,
   'John Means': johnMeans, 
   'Corey Kluber': coreyKluber, 
   'Francisco Lindor': franciscoLindor, 
   'Yasmani Grandal': yasmaniGrandal, 
   'Ozzie Albies': ozzieAlbies, 
   'Jeimer Candelario': jeimerCandelario, 
   'Dellin Betances': dellinBetances, 
   'Neil Walker': neilWalker, 
   'Justin Wilson': justinWilson, 
   'Todd Frazier': toddFrazier, 
   'Juan Soto': juanSoto, 
   'Trea Turner': treaTurner, 
   'Anthony Rendon': anthonyRendon, 
   'Patrick Corbin': patrickCorbin
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

  const initialTermsUnshuffled = ['Spencer Turnbull', 'Joe Musgrove', 'John Means', 'Corey Kluber', 'Francisco Lindor', 'Yasmani Grandal', 'Ozzie Albies', 'Jeimer Candelario', 'Dellin Betances', 'Neil Walker', 'Justin Wilson', 'Todd Frazier', 'Juan Soto', 'Trea Turner', 'Anthony Rendon', 'Patrick Corbin'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 8, 
        description: '2019 NATIONALS WORLD SERIES CHAMPIONS', 
        terms: ['Juan Soto', 'Trea Turner', 'Anthony Rendon', 'Patrick Corbin'],  
        color: '#4CAF50' },

    { number: 8,
         description: '2021 NO HITTERS', 
         terms: ['Spencer Turnbull', 'Joe Musgrove', 'John Means', 'Corey Kluber'],  
         color: '#e5de00' },

    { number: 8, 
        description: 'SWITCH HITTERS', 
        terms: ['Francisco Lindor', 'Yasmani Grandal', 'Ozzie Albies', 'Jeimer Candelario'], 
        color: '#e27602' },
    
    { number: 8, 
        description: 'PLAYED FOR THE METS AND YANKEES', 
        terms: ['Dellin Betances', 'Neil Walker', 'Justin Wilson', 'Todd Frazier'], 
        color: '#de0a26' }]
  
  