import React from "react";
import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDownTimer(props) {
  const [countdown, setCountdown] = useState(props.seconds);
  const timerId = useRef();
  const text1 = "time-out";

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
      if (props.setTimer !== undefined) props.setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);
  return <h5>⏳ : {formatTime(countdown)}</h5>;
}
