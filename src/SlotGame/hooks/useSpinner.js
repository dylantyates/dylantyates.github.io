import { useEffect, useCallback, useState, useRef } from "react";
import { generateRandomMatrix } from "../utils";

const useInterval = (callback, delay, spinning) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (spinning) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => undefined;
  }, [delay, spinning]);
}

export const useSpinner = ({
    spinning: initiallySpinning = false,
    reels: initialReels = generateRandomMatrix(5, 3),
} = {}) => {
    const [spinning, setSpinning] = useState(initiallySpinning);
    const [reels, setReels] = useState(initialReels);
    const tick = useCallback(() => {
      console.log('Spinning');
      if (spinning) {
        setReels(generateRandomMatrix(5, 3));
      }
      return () => undefined;
    }, [spinning])
    const start = () => setSpinning(true);
    const stop = () => setSpinning(false);

    useInterval(tick, 0, spinning);

    return {spinning, reels, start, stop };
};
