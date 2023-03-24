import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function StaticTimePickerLandscape({
  setHourPicker,
  setMinutePicker,
  setTimer,
  isTimer
}) {
  const handleTime = (time) => {
    console.log(time,"as time")
    if (time) {
      setHourPicker(time.$H);
      setMinutePicker(time.$m);
      
    }
    else if(time === null){
        setTimer(false)
        // console.log("the isTimer is : false");
        console.log("the isTimer is :" , isTimer);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker orientation="landscape" onChange={handleTime} />
    </LocalizationProvider>
  );
}
