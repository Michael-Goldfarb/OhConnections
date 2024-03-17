import jakeArrieta from './jakearrieta.png';
import maxScherzer from './maxscherzer.png';
import mikeFiers from './mikefiers.png';
import coleHamels from './colehamels.png';
import miguelSano from './miguelsano.png';
import aaronJudge from './aaronJudge.png';
import garySanchez from './garysanchez.png';
import justinBour from './justinbour.png';
import krisBryant from './krisbryant.png';
import giancarloStanton from './giancarlostanton.png';
import joseAbreu from './joseabreu.png';
import mookieBetts from './mookiebetts.png';
import claytonKershaw from './claytonkershaw.png';
import anthonyRizzo from './anthonyrizzo.png';
import javyBaez from './javybaez.png';
import kyleSchwarber from './kyleschwarber.png';


export const playerImages = {
    'Jake Arrieta': jakeArrieta,
    'Max Scherzer': maxScherzer,
    'Mike Fiers': mikeFiers, 
   'Cole Hamels': coleHamels, 
   'Clayton Kershaw': claytonKershaw, 
   'Miguel Sanó': miguelSano, 
   'Aaron Judge': aaronJudge, 
   'Gary Sánchez': garySanchez, 
   'Justin Bour': justinBour, 
   'Kris Bryant': krisBryant, 
   'Giancarlo Stanton': giancarloStanton, 
   'Jose Abreu': joseAbreu, 
   'Mookie Betts': mookieBetts, 
   'Anthony Rizzo': anthonyRizzo, 
   'Javy Baez': javyBaez, 
   'Kyle Schwarber': kyleSchwarber
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

  const initialTermsUnshuffled = ['Max Scherzer', 'Mike Fiers', 'Cole Hamels', 'Clayton Kershaw', 'Miguel Sanó', 'Aaron Judge', 'Gary Sánchez', 'Justin Bour', 'Kris Bryant', 'Giancarlo Stanton', 'Jose Abreu', 'Mookie Betts', 'Anthony Rizzo', 'Javy Baez', 'Kyle Schwarber', 'Jake Arrieta'];
  export const initialTerms = shuffleArray([...initialTermsUnshuffled]);
  
  export const correctGroups = [
    { number: 3, 
        description: '2015 CUBS', 
        terms: ['Anthony Rizzo', 'Javy Baez', 'Kyle Schwarber', 'Jake Arrieta'],  
        color: '#4CAF50' },

    { number: 3,
         description: 'MVPS NOW ON DIFFERENT TEAMS', 
         terms: ['Kris Bryant', 'Giancarlo Stanton', 'Jose Abreu', 'Mookie Betts'],  
         color: '#e5de00' },

    { number: 3, 
        description: '2017 HR DERBY CONTESTANTS', 
        terms: ['Miguel Sanó', 'Aaron Judge', 'Gary Sánchez', 'Justin Bour'], 
        color: '#e27602' },
    
    { number: 3, 
        description: '2014 / 2015 NO HITTERS', 
        terms: ['Max Scherzer', 'Mike Fiers', 'Cole Hamels', 'Clayton Kershaw'], 
        color: '#de0a26' }]
  
  