import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';


const $app = document.querySelector('#app');

$app.insertAdjacentHTML(
  "beforeend", 
  `
    ${ScoreBoard()}
    ${BoardGame(6)}
  `
);