
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  usePickerLayout,
  pickersLayoutClasses,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
} from "@mui/x-date-pickers/PickersLayout";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import "./Calender.css"
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";



const timeSlots = [
  "12:15 PM",
  "1:30 PM",
  "2:45 PM",
  "4:00 PM",
  "6:00 PM",
  "8:00 PM",
];

function CustomLayout(props) {
  const { toolbar, content} = usePickerLayout(props);

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={{
        overflow: "auto",
        [`.${pickersLayoutClasses.actionBar}`]: {
          gridColumn: 1,
          gridRow: 2,
        },
        [`.${pickersLayoutClasses.toolbar}`]: {
          gridColumn: 2,
          gridRow: 1,
        },
      }}
    >
      {toolbar}
      <PickersLayoutContentWrapper
        className={pickersLayoutClasses.contentWrapper}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack content vertically
            alignItems: "center", // Center content horizontally
            justifyContent: "center",
         // Center content vertically (optional)
          }}
        >
          <Box sx={{ marginTop: 2}}>{content}</Box>

        </Box>
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot>
  );
}



const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);
    };

    const handleTimeChange = (event) => {
      setSelectedTime(event.target.value);
    };

    const handleConfirm = () => {
      // Add your confirmation logic here
      console.log(
        `Reservation confirmed for ${selectedDate?.format(
          "MMMM D, YYYY"
        )} at ${selectedTime}`
      );
    };

    const today = dayjs()
    const oneMonthLater = today.add(1,'month')

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
                xs:"column",
                sm:"row"},
            alignItems: "center",
            justifyContent: "center",
            gap: {sm:"30px",xs:"1px"}
            
          }}
        >
          <StaticDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            minDate={today}
            maxDate={oneMonthLater}
            slots={{
              layout: CustomLayout,
            }}
          />

          {/* Time slot dropdown */}
          {selectedDate && (
            <Box sx={{ display: "flex", flexDirection:"column" ,gap:2, alignItems: "center", marginTop: 1,justifyContent: "center" }}>
              <FormControl sx={{ marginTop: 1, minWidth: 200 }}>
                <InputLabel id="time-slot-label">Select Time</InputLabel>
                <Select
                  labelId="time-slot-label"
                  value={selectedTime}
                  label="Select Time"
                  onChange={handleTimeChange}
                >
                  {timeSlots.map((time, index) => (
                    <MenuItem key={index} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* confirmbutton */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleConfirm}
                sx={{ marginLeft: 2 }}
                disabled={!selectedTime}
              >
                Confirm
              </Button>
            </Box>
          )}
        </Box>
      </LocalizationProvider>
    );
};

export default Calender;