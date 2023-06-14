import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import CardGame from "./src/components/CardGame";

const $app = document.querySelector('#app');
const $htmlCardGame = CardGame();

$app.insertAdjacentHTML("beforeend", $htmlCardGame);