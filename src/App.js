import React, { useState, useCallback, useEffect } from 'react';
import {
  Game, SlotWrapper, Section,
  SpinButton, ReelCol, ReelSquare,
  PayoutBar,
} from './App.styles';
import { generateRandomMatrix, matrixHas2x, matrixHas3x } from './App.utils';
import { CREDIT, BET, X2_WIN, X3_WIN } from './App.constants';
import Squares from './Squares';

const App = () => {
  const [theme, setTheme] = useState('default');
  const [bankRoll, setBankRoll] = useState(CREDIT);
  const [bonus, setBonus] = useState(0);
  const [reels, setReels] = useState(generateRandomMatrix(5, 3));
  const [spinCount, setSpinCount] = useState(0);

  const handleSpin = useCallback(() => {
    setReels(generateRandomMatrix(5, 3));
    setSpinCount(spinCount + 1);
  }, [spinCount]);

  useEffect(() => {
    if (spinCount === 0) {
      return;
    }

    if (matrixHas3x(reels)) {
      setBankRoll(bankRoll + X3_WIN);
      setBonus(bonus + 2);
      setTheme('win');
      return;
    }

    if (matrixHas2x(reels)) {
      setBankRoll(bankRoll + X2_WIN);
      setBonus(bonus + 1)
      setTheme('win');
      return;
    };

    setBankRoll(bankRoll - BET);
    setTheme('lose');

    return () => false;
  }, [reels, spinCount])

  return (
    <Game>
      <Section>Spins: {spinCount}</Section>
      <Section>Bet: {BET.toFixed(2)}</Section>
      <Section>Bonus: {bonus}</Section>
      <SlotWrapper>
        {reels.map((r, index) => {
          return (
            <ReelCol key={`col-${index}`}>
              {r.map((sr, index) => (
                <ReelSquare key={`sq-${index}`}>{Squares[sr]}</ReelSquare>
              ))}
            </ReelCol>
          )
        })}
        <PayoutBar className={theme} />
      </SlotWrapper>
      <Section>Bank: ${bankRoll.toFixed(2)}</Section>
      <Section className={
        bankRoll === CREDIT
          ? 'even'
          : (bankRoll - CREDIT) > 0
            ? 'up'
            : 'down'
        }
      >
        Delta: ${Math.abs(bankRoll - CREDIT).toFixed(2)}
      </Section>
      <SpinButton onClick={() => handleSpin()}>Spin</SpinButton>
    </Game>
  );
}

export default App;
