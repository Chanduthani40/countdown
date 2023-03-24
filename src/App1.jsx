import "./App.css";
import Progressbar from "./component/progressbar";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function App1() {
  const [hours, setHours] = useState(0);

  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isAlaram, setAlaram] = useState(false);
  const [isStart, setStart] = useState(false);

  const [hourPicker, setHourPicker] = useState(0);
  const [minutePicker, setMinutePicker] = useState(0);

  const [isTimer,setTimer] = useState(false);

  const handleStart = () => {
    isStart ? setStart(false) : setStart(true);
  };

 
 

  useEffect(() => {
    const timeInterval = setInterval(() => {
      let targetTime = (hourPicker + (minutePicker / 60)) * 3600000; //target time for setting alaram
      console.log("the targetTime is:", targetTime);

      (targetTime !== 0)&&(setTimer(true))

      let timeString = new Date().toLocaleTimeString(); // to get the curr time for example => 12:00:00 AM

      let [time, period] = timeString.split(" "); // time = 12:00:00 and period = AM
      let [h, m, s] = time.split(":").map(Number); // h=12, m=0, s=0
      if (period === "PM" && h !== 12) {
        h = h + 12;
      }
      h = h * 3600000; // converting hours into milliseconds...
      m = m * 60000; // converting minutes into milliseconds...
      s = s * 1000; // converting seconds into milliseconds...
      const currTime = h + m + s; // adding all the milliseconds got from h,m,s and assigning to the currDate

      const hours_24 = 86400000; // this is a milliseconds value of (24hrs *  3600000)

      let val = currTime - targetTime;

      val = val > 0 ? hours_24 - val : -1 * val;

      const hours = Math.floor(
        (val % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      ); //remaining hours to set the alaram

      const mins = Math.floor((val % (60 * 60 * 1000)) / (1000 * 60)); // remaining minutes to set the alaram
      const seconds = Math.floor((val % (60 * 1000)) / 1000); // remaining seconds to set the alaram
      setHours(hours); // set the remaining hours =>  [hours, setHours] = useState(0)
      setMins(mins); // set the remaining minutes =>  [mins, setMins] = useState(0)
      setSeconds(seconds); //// set the remaining seconds =>  [hours, setHours] = useState(0)
      if (
        hourPicker === new Date().getHours() &&
        minutePicker === new Date().getMinutes() &&
        0 === new Date().getSeconds()
      ) {
        setAlaram(true); // if the current is exactly equal to our alaram time then we're setting alaram true [isAlaram, setAlaram] = useState(false)

        alert("hello"); // for tesing ...
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [hourPicker, minutePicker]);

  return (
    <>
      <Button variant="contained" onClick={handleStart}>
        {isStart ? "Stop" : "Start"}
      </Button>

      {isStart && (
        <Progressbar
          hours={hours}
          mins={mins}
          seconds={seconds}
          isAlaram={isAlaram}
          setHourPicker={setHourPicker}
          setMinutePicker={setMinutePicker}
          isTimer={isTimer}
          setTimer={setTimer}
        />
      )}
    </>
  );
}
