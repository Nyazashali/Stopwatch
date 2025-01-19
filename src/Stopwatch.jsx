import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10ms
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / 60000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
      milliseconds
    ).padStart(3, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(time)}</h1>
      <div>
        <button style={styles.button} onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button style={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  timer: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  button: {
    fontSize: "18px",
    margin: "0 10px",
    padding: "10px 20px",
    cursor: "pointer",
    border: "rounded",
  },
};

export default Stopwatch;
