import davidPrice from './davidprice.png';
import sonnyGray from './sonnygray.png';
import walkerBuehler from './walkerbuehler.png';
import adleyRutschman from './adleyrutschman.png';
import joshJung from './joshjung.png';
import bobbyWittJr from './bobbywittjr.png';
import corbinCarroll from './corbincarroll.png';
import dansbySwanson from './dansbyswanson.png';
import juanSoto from './juansoto.png';
import vladimirGuerreroJr from './vladimirguerrerojr.png';
import peteAlonso from './petealonso.png';
import bryceHarper from './bryceharper.png';
import reidDetmers from './reiddetmers.png';
import domingoGerman from './domingogerman.png';
import michaelLorenzen from './michaellorenzen.png';
import framberValdez from './frambervaldez.png';


export const playerImages = {
    'Adley Rutschman': adleyRutschman,
    'Josh Jung': joshJung,
    'Bobby Witt Jr.': bobbyWittJr, 
    'Corbin Carroll': corbinCarroll, 
    'Dansby Swanson': dansbySwanson, 
    'Walker Buehler': walkerBuehler, 
    'Sonny Gray': sonnyGray, 
    'David Price': davidPrice, 
    'Juan Soto': juanSoto, 
    'Vladimir Guerrero Jr.': vladimirGuerreroJr, 
    'Pete Alonso': peteAlonso, 
    'Bryce Harper': bryceHarper, 
    'Reid Detmers': reidDetmers, 
    'Domingo German': domingoGerman, 
    'Michael Lorenzen': michaelLorenzen, 
    'Framber Valdez': framberValdez
  };


  export const initialTerms = ['Adley Rutschman', 'Josh Jung', 'Bobby Witt Jr.', 'Corbin Carroll', 'Reid Detmers', 'Michael Lorenzen', 'Domingo German', 'Framber Valdez', 'Vladimir Guerrero Jr.', 'Bryce Harper', 'Pete Alonso', 'Juan Soto', 'Walker Buehler', 'David Price', 'Sonny Gray', 'Dansby Swanson'];
  
  export const correctGroups = [
    { number: 2, 
        description: 'RECENT NO-HITTERS', 
        terms: ['Michael Lorenzen', 'Domingo German', 'Reid Detmers', 'Framber Valdez'],  
        color: '#4CAF50' },

    { number: 2,
         description: 'RECENT HOME RUN DERBY WINNERS', 
         terms: ['Vladimir Guerrero Jr.', 'Pete Alonso', 'Bryce Harper', 'Juan Soto'],  
         color: '#e5de00' },

    { number: 2, 
        description: 'VANDERBILT MLB PLAYERS', 
        terms: ['Dansby Swanson', 'Walker Buehler', 'Sonny Gray', 'David Price'], 
        color: '#e27602' },
    
    { number: 2, 
        description: 'DRAFTED IN 2019', 
        terms: ['Corbin Carroll', 'Adley Rutschman', 'Josh Jung', 'Bobby Witt Jr.'], 
        color: '#de0a26' }]
  
  