/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Game, SlotWrapper, Section,
  SpinButton, ReelCol, ReelSquare,
  PayoutBar,
} from './styles';
import { matrixHas2x, matrixHas3x, randomIntInRange } from './utils';
import {
  CREDIT, BET, X2_WIN, X3_WIN,
} from './constants';
import Squares from './Squares';
import { useSpinner } from './hooks/useSpinner';

function Animation() {
  return (
    <ReelSquare>
      {Squares[randomIntInRange(0, Squares.length - 1)]}
    </ReelSquare>
  );
}

function SlotGame() {
  const [theme, setTheme] = useState('default');
  const [bankRoll, setBankRoll] = useState(CREDIT);
  const [bonus] = useState(0);
  const [spinCount, setSpinCount] = useState(0);
  const [activeIntervals, setActiveIntervals] = useState([]);

  const {
    reels, spinning, start, stop,
  } = useSpinner();

  const closeAllIntervals = (ids = []) => {
    console.log(`Clearing: ${ids.join(' | ')}`);
    const cleared = ids.map((m) => clearInterval(m));
    setActiveIntervals([]);
    return () => cleared;
  };

  const handleSpin = useCallback(() => {
    if (spinning) {
      closeAllIntervals(activeIntervals);
      console.log(activeIntervals.join(' | '));
      stop();
      return () => undefined;
    }
    const id = setTimeout(() => {
      console.log(`[Callback Self Stop] TimeoutID: ${id}`);
      stop();
      setActiveIntervals([]);
      return () => closeAllIntervals(activeIntervals);
    }, 3000);
    setActiveIntervals((prev) => [...prev, id]);
    setBankRoll((prev) => prev - BET);
    setTheme('spin');
    setSpinCount((prev) => prev + 1);
    start();
    console.log(`[Callback Running] TimeoutID: ${id}`);
    return () => {
      console.log(`[Callback Return] TimeoutID: ${id}`);
      clearTimeout(id);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, stop, spinning]);

  useEffect(() => {
    if (!spinning && spinCount > 0) {
      if (matrixHas3x(reels)) {
        setBankRoll((prev) => prev + X3_WIN);
        setTheme('win');
        return () => undefined;
      }

      if (matrixHas2x(reels)) {
        setBankRoll((prev) => prev + X2_WIN);
        setTheme('win');
        return () => undefined;
      }

      if (spinCount === 0) {
        return () => undefined;
      }

      if (bankRoll < 0) {
        setTheme('deposit');
        return () => undefined;
      }

      setTheme('lose');

      return () => undefined;
    }

    return () => undefined;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinning, spinCount]);

  return (
    <Game>
      <Section className="row">
        <Section>
          Spins:
          {spinCount}
        </Section>
        <Section>
          Bet:
          {BET.toFixed(2)}
        </Section>
        <Section>
          Bonus:
          {bonus}
        </Section>
      </Section>
      <Section className="plain">
        <h1>Astro Slot</h1>
      </Section>
      <SlotWrapper>
        { spinning
          ? reels.list.map((r) => {
            const colId = uuidv4();
            return (
              <ReelCol key={`col-${colId}`}>
                {
                r.map(() => {
                  const sqId = uuidv4();
                  return (<Animation key={`sq-${sqId}`} />);
                })
                }
              </ReelCol>
            );
          })
          : reels.list.map((r) => {
            const colId = uuidv4();
            return (
              <ReelCol key={`col-${colId}`}>
                {
                r.map((sr) => {
                  const sqId = uuidv4();
                  return (<ReelSquare key={`sq-${sqId}`}>{Squares[sr]}</ReelSquare>);
                })
              }
              </ReelCol>
            );
          })}
        <PayoutBar className={theme} />
      </SlotWrapper>
      <Section>
        Bank: $
        {bankRoll.toFixed(2)}
      </Section>
      <Section className={
        bankRoll === CREDIT
          ? 'even'
          : (bankRoll - CREDIT) > 0
            ? 'up'
            : 'down'
        }
      >
        Delta: $
        {Math.abs(bankRoll - CREDIT).toFixed(2)}
      </Section>
      <SpinButton onClick={() => handleSpin()}>Spin</SpinButton>
      <SpinButton onClick={() => stop()}>Stop</SpinButton>
    </Game>
  );
}

export default SlotGame;
