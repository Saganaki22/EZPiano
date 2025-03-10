// Import all song melodies
import { furEliseMelody } from './notes/furElise.js';
import { greensleevesMelody } from './notes/greensleeves.js';
import { gymnopedieMelody } from './notes/gymnopedie.js';
import { happyBirthdayMelody } from './notes/happyBirthday.js';
import { lacrimosaMelody } from './notes/lacrimosa.js';
import { minuetMelody } from './notes/minuet.js';
import { odeToJoyMelody } from './notes/odeToJoy.js';
import { twinkleTwinkleMelody } from './notes/twinkleTwinkle.js';
import { nocturneMelody } from './notes/nocturne.js';
import { amazingGraceMelody } from './notes/amazingGrace.js';
import { moonlightSonataMelody } from './notes/moonlightSonata.js';
import { turkishMarchMelody } from './notes/turkishMarch.js';
// Import game theme songs
import { pokemonThemeMelody } from './notes/pokemontheme.js';
import { superMarioThemeMelody } from './notes/supermariotheme.js';
import { tetrisThemeMelody } from './notes/tetristheme.js';
import { rickrollMelody } from './notes/rickroll.js';
// Add Flight of the Bumblebee
import { flightOfTheBumblebeeMelody } from './notes/flightofthebumblebee.js';
// Add imports for other songs as they are created

// Export all songs as a single object
const songs = {
    'fur-elise': furEliseMelody,
    'greensleeves': greensleevesMelody,
    'gymnopedie': gymnopedieMelody,
    'happy-birthday': happyBirthdayMelody,
    'lacrimosa': lacrimosaMelody,
    'minuet': minuetMelody,
    'ode-to-joy': odeToJoyMelody,
    'twinkle-twinkle': twinkleTwinkleMelody,
    'nocturne': nocturneMelody,
    'amazing-grace': amazingGraceMelody,
    'moonlight': moonlightSonataMelody,
    'turkish-march': turkishMarchMelody,
    // Game theme songs
    'pokemon': pokemonThemeMelody,
    'mario': superMarioThemeMelody,
    'tetris': tetrisThemeMelody,
    'rickroll': rickrollMelody,
    // Classical pieces
    'bumblebee': flightOfTheBumblebeeMelody,
    // Add other songs here as they are created
};

export default songs; 