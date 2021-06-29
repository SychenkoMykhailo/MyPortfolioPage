import React, { useState, useCallback, useEffect } from "react";
import styles from "./Game.module.css";

import GameCard from "./GameCard";

function Game() {
  // Styles
  const {
    container,
    game,
    cards,
    input_container,
    input,
    input_btn,
    game_btn,
    stack,
  } = styles;
  // State
  const [userStack, setUserStack] = useState(
    Number(localStorage.getItem("stack")) || 100
  );
  const [betValue, setBetValue] = useState(10);
  const [start, setStart] = useState(false);
  const [win, setWin] = useState(false);
  const [disable, setDisable] = useState(false);
  // Functions
  const bet = () => {
    if (userStack - betValue >= 0) {
      setStart(true);
    }
  };
  const checkLuck = useCallback(() => {
    setDisable(true);
    let randomNum = ~~(Math.random() * 3) + 1;
    randomNum > 2 ? setWin(true) : setWin(false);
    setTimeout(() => {
      randomNum > 2
        ? setUserStack(Number(userStack) + betValue * 2)
        : setUserStack(Number(userStack) - betValue);
      setStart(false);
      setDisable(false);
    }, 1300);
  }, [userStack, betValue]);

  const incr = () => {
    if (Number(betValue) >= 1 && Number(betValue) < userStack)
      setBetValue(Number(betValue) + 1);
  };
  const decr = () => {
    if (Number(betValue) > 1 && Number(betValue) <= userStack)
      setBetValue(Number(betValue) - 1);
  };

  useEffect(() => {
    if (userStack === 0) {
      alert("You lost all 💎 Click Ok to restart");
      setUserStack(100);
      setBetValue(10);
    }
    localStorage.setItem("stack", userStack);
  }, [userStack]);
  //=================================================================
  return (
    <div className={container}>
      <div className={game}>
        {start ? (
          <>
            <div>Try to find Queen</div>
            <div className={cards}>
              <GameCard onUserClick={checkLuck} disable={disable} win={win} />
              <GameCard onUserClick={checkLuck} disable={disable} win={win} />
              <GameCard onUserClick={checkLuck} disable={disable} win={win} />
            </div>
          </>
        ) : (
          <>
            <div>Place a Bet</div>
            <div className={input_container}>
              <button onClick={decr} className={input_btn}>
                -
              </button>
              <input
                className={input}
                type="number"
                value={betValue}
                onChange={(e) => {
                  if (e.target.value >= 1 && e.target.value <= userStack)
                    setBetValue(e.target.value);
                }}
              />
              <button onClick={incr} className={input_btn}>
                +
              </button>
            </div>
            <button onClick={bet} className={game_btn}>
              Bet {betValue}💎
            </button>
          </>
        )}
      </div>
      <div className={stack}>💎{userStack}💎</div>
    </div>
  );
}
export default Game;
