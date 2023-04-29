import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./Celebration.css";

export default function Celebration({ highscore, time }) {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/letter");
  };

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="celebration-container">
        <div className="celebration-notification">
          <p>
            최고점수: <span>{highscore}</span>
            <br />
            경과시간: <span>{time}s</span>
          </p>
          <button onClick={handleClick}>다음</button>
        </div>
      </div>
    </>
  );
}
