import mookieBetts from './mookiebetts.png';
import jeterDowns from './jeterdowns.png';
import alexVerdugo from './alexverdugo.png';
import davidPrice from './davidprice.png';
import tommyPham from './tommypham.png';
import evanLongoria from './evanlongoria.png';
import blakeSnell from './blakesnell.png';
import chrisArcher from './chrisarcher.png';
import jorgeSoler from './jorgesoler.png';
import coreySeager from './coreyseager.png';
import jeremyPena from './jeremypena.png';
import stephenStrasburg from './stephenstrasburg.png';
import edwinDiaz from './edwindiaz.png';
import aaronNola from './aaronnola.png';
import yuliGurriel from './yuligurriel.png';
import willsonContreras from './willsoncontreras.png';


export const playerImages = {
    'Mookie Betts': mookieBetts,
    'Jeter Downs': jeterDowns,
    'Alex Verdugo': alexVerdugo, 
    'David Price': davidPrice, 
    'Tommy Pham': tommyPham, 
    'Evan Longoria': evanLongoria, 
    'Blake Snell': blakeSnell, 
    'Chris Archer': chrisArcher, 
    'Jorge Soler': jorgeSoler, 
    'Corey Seager': coreySeager, 
    'Jeremy Peña': jeremyPena, 
    'Stephen Strasburg': stephenStrasburg, 
    'Edwin Díaz': edwinDiaz, 
    'Aaron Nola': aaronNola, 
    'Yuli Gurriel': yuliGurriel, 
    'Willson Contreras': willsonContreras
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

  const initialTermsUnshuffled = ['Chris Archer', 'Evan Longoria', 'Blake Snell', 'Tommy Pham', 'Jeremy Peña', 'Stephen Strasburg', 'Jorge Soler', 'Corey Seager', 'Alex Verdugo', 'David Price', 'Jeter Downs', 'Mookie Betts', 'Edwin Díaz', 'Willson Contreras', 'Yuli Gurriel', 'Aaron Nola'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 12, 
        description: 'TRADED FROM THE RAYS', 
        terms: ['Chris Archer', 'Tommy Pham', 'Blake Snell', 'Evan Longoria'],  
        color: '#4CAF50' },

    { number: 12,
         description: 'RECENT WORLD SERIES MVPS', 
         terms: ['Corey Seager', 'Jorge Soler', 'Stephen Strasburg', 'Jeremy Peña'],  
         color: '#e5de00' },

    { number: 12, 
        description: 'PLAYERS IN MOOKIE BETTS TRADE', 
        terms: ['Mookie Betts', 'Jeter Downs', 'David Price', 'Alex Verdugo'], 
        color: '#e27602' },
    
    { number: 12, 
        description: 'BROTHER PLAYS IN THE MLB', 
        terms: ['Edwin Díaz', 'Aaron Nola', 'Yuli Gurriel', 'Willson Contreras'], 
        color: '#de0a26' }]
  
  