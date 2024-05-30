import React, { useState, useEffect } from "react";
import "../styles/countdown.css";

// Define the type for the countdown state
interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Function to calculate time remaining until Halloween
const calculateTimeUntilHalloween = (): Countdown => {
  const now = new Date();
  const target = new Date(now.getFullYear(), 9, 31); // Halloween is on October 31st
  if (now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() > 31)) {
    target.setFullYear(target.getFullYear() + 1); // If Halloween has passed this year, set it to next year
  }

  const difference = target.getTime() - now.getTime();

  // Calculate time components
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<Countdown>(
    calculateTimeUntilHalloween()
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      const newCountdown = calculateTimeUntilHalloween();
      setCountdown(newCountdown);
      if (
        newCountdown.days === 0 &&
        newCountdown.hours === 0 &&
        newCountdown.minutes === 0 &&
        newCountdown.seconds === 0
      ) {
        // When Halloween is reached, display a message
        console.log("Happy Halloween!");
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1 className="countdown-timer-title">Countdown to Halloween</h1>
      <p className="countdown-timer-text">{`${countdown.days} days ${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds`}</p>
      {countdown.days === 0 &&
        countdown.hours === 0 &&
        countdown.minutes === 0 &&
        countdown.seconds === 0 && (
          <p className="countdown-timer-text countdown-timer-alert">
            Happy Halloween!
          </p>
        )}
    </div>
  );
};

export default CountdownTimer;
