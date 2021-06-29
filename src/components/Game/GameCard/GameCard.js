import React, { useState } from "react";
import styles from "./GameCard.module.css";
import classNames from "classnames";

import cardFrontQueen from "../../../images/card_front_queen.png";
import cardFrontJack from "../../../images/card_front_jack.png";
export default function GameCard({ onUserClick, disable, win }) {
  // State
  const [clicked, setClicked] = useState(false);
  // Styles
  const {
    flip_card,
    flip_card_inner,
    flip_card_front,
    flip_card_back,
    flip_card_back_container,
  } = styles;
  const flipClass = classNames({ [flip_card_inner]: clicked });
  //===================================================================
  return (
    <>
      <div
        className={flip_card}
        onClick={() => {
          if (!disable) {
            setClicked(true);
            onUserClick();
          }
        }}
      >
        <div className={flipClass}>
          <div className={flip_card_front}></div>
          <div className={flip_card_back_container}>
            <img
              src={win ? cardFrontQueen : cardFrontJack}
              alt="front card"
              className={flip_card_back}
            />
          </div>
        </div>
      </div>
    </>
  );
}
