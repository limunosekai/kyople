import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import "./Celebration.css";

export default function Celebration({ highscore, time }) {
  const { width, height } = useWindowSize();
  const handleClick = () => {};

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="celebration-container">
        <div className="celebration-notification">
          <p>
            Highscore achieved: <span>{highscore}</span>
            <br />
            Time Taken: <span>{time}s</span>
          </p>
          <button onClick={handleClick}></button>
        </div>
      </div>
    </>
  );
}
