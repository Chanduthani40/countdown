import React, { useEffect } from "react";
import "../App.css";
import StaticTimePickerLandscape from "./Timepicker";
// import { useState } from "react";

export default function Progressbar({ hours, mins, seconds, isAlaram,setHourPicker,setMinutePicker,isTimer,setTimer}) {
//   const [hourPicker, setHourPicker] = useState(0);
//   const [minutePicker, setMinutePicker] = useState(0);

  function toggleMusic() {
    let audio = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
    audio.play();
  }

  useEffect(() => {
    isAlaram && toggleMusic();
  }, [isAlaram]);


  return (
    <div className="container">
      {/* <h1 data-testid = "header">11:00:00 AM</h1> */}
      <StaticTimePickerLandscape
        setHourPicker={setHourPicker}
        setMinutePicker={setMinutePicker}
        setTimer={setTimer}
        isTimer={isTimer}
      />
      {
        (isTimer)&&<h1 data-testid="result-time">{hours + ":" + mins + ":" + seconds}</h1>
      }
      <button>stop Alaram</button>
    </div>
  );
}
