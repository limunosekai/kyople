import React from "react";
import { MovingComponent } from "react-moving-text";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import "./Letter.css";

const Letter = () => {
  const { width, height } = useWindowSize();

  const soundEffect = new Audio();
  soundEffect.autoplay = true;
  soundEffect.src = "audio/letter.mp3";

  const handleClick = () => {
    soundEffect.play();
  };

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="letter">
        <MovingComponent
          type="shakeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <span className="letter-text">{`축하합니다 !\n임성현에게 상품을 받으세요`}</span>
        </MovingComponent>
        <button onClick={handleClick}>받기</button>
      </div>
    </>
  );
};

export default Letter;
