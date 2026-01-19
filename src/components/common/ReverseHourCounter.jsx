import { useEffect, useState } from "react";

const ReverseHourCounter = ({ startHours, className = "" }) => {
  // convert hours to seconds
  const [time, setTime] = useState(startHours * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // convert seconds to HH:MM:SS
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <h2 className={`font-poppins ${className}`}>
      {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </h2>
  );
};

export default ReverseHourCounter;
