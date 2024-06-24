import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1000);
    }, 1000);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
    }
    setTimer(0);
  };

  const formatTime = (timer: number) => {
    const hours = Math.floor(timer / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timer / 60000) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timer);

  return (
    <div className="container">
      <div className="main">
        <div className="conant">
          <p>{hours}</p>
        </div>
        <p className="hour">hour</p>
        <button onClick={handleStart} className="click">start</button>
      </div>
      <div className="main">
        <div className="conant">
          <p>{minutes}</p>
        </div>
        <p className="hour">minute</p>
        <button onClick={handlePause} className="click">pause</button>
      </div>
      <div className="main">
        <div className="conant">
          <p>{seconds}</p>
        </div>
        <p className="hour">second</p>
        <button onClick={handleReset} className="click">reset</button>
      </div>
    </div>
  );
};

export default App;
