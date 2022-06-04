import { Square } from './App.styles';

const Alien = () => (<Square>👽</Square>);
const Monster = () => (<Square>👾</Square>);
const Saucer = () => (<Square>🛸</Square>);
const Rocket = () => (<Square>🚀</Square>);
const Comet = () => (<Square>☄️</Square>);
const Galaxy = () => (<Square>🌌</Square>);
const Moon = () => (<Square>🌕</Square>);
const Sun = () => (<Square>☀️</Square>);
const Satellite = () => (<Square>🛰️</Square>);
const Star = () => (<Square>⭐</Square>);
const BonusStar = () => (<Square>🌟</Square>);
const SpaceMan = () => (<Square>👨‍🚀</Square>);
const SpaceWoman = () => (<Square>👩‍🚀</Square>);

const Squares = [
  <Alien />, <Monster />, <Saucer />, <Rocket />,
  <Comet />, <Galaxy />, <Moon />, <Sun />,
  <Satellite />, <Star />, <BonusStar />, <SpaceMan />,
  <SpaceWoman />,
];

export default Squares;
