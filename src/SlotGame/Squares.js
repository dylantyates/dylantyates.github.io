import { Square } from './styles';

function Alien() {
  return <Square>👽</Square>;
}
function Monster() {
  return <Square>👾</Square>;
}
function Saucer() {
  return <Square>🛸</Square>;
}
function Rocket() {
  return <Square>🚀</Square>;
}
function Comet() {
  return <Square>☄️</Square>;
}
function Galaxy() {
  return <Square>🌌</Square>;
}
function Moon() {
  return <Square>🌕</Square>;
}
function Sun() {
  return <Square>☀️</Square>;
}
function Satellite() {
  return <Square>🛰️</Square>;
}
function Star() {
  return <Square>⭐</Square>;
}
function BonusStar() {
  return <Square>🌟</Square>;
}
function SpaceMan() {
  return <Square>👨‍🚀</Square>;
}
function SpaceWoman() {
  return <Square>👩‍🚀</Square>;
}

const Squares = [
  <Alien />, <Monster />, <Saucer />, <Rocket />,
  <Comet />, <Galaxy />, <Moon />, <Sun />,
  <Satellite />, <Star />, <BonusStar />, <SpaceMan />,
  <SpaceWoman />,
];

export default Squares;
