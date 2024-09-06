
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
import { Box, Button, FormControl,  InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";





const timeSlots = [
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
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
    const [name, setName] = useState("");
    const [guestNumber, setGuestNumber] = useState(2)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneError, setPhoneError] = useState(false);
    const [email,setEmail] = useState("")


    const handleDateChange = (newDate) => {
      setSelectedDate(newDate);
    };

    const handleTimeChange = (event) => {
      setSelectedTime(event.target.value);
    };



    const today = dayjs()
    const twoWeeksLater = today.add(2,'week')

      const validatePhoneNumber = (value) => {
        // Regular expression for a 10-digit phone number (you can customize it based on your format)
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(value);
      };

      const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);

        // Validate phone number
        if (value === "" || validatePhoneNumber(value)) {
          setPhoneError(false); // Valid phone number
        } else {
          setPhoneError(true); // Invalid phone number
        }
      };




      const handleConfirm = async () => {
        const reservationData = {
          name,
          email,
          guest:guestNumber,
          phone:phoneNumber,
          date:selectedDate.format("YYYY-MM-DD"),
          time:selectedTime
        }
       await axios.post("http://localhost:8000/reservation",reservationData);
      };

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            gap: { sm: "30px", xs: "1px" },
          }}
        >
          <StaticDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            minDate={today}
            maxDate={twoWeeksLater}
            slots={{
              layout: CustomLayout,
            }}
          />

          {/* Time slot dropdown */}
          {selectedDate && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                marginTop: 1,
                justifyContent: "center",
              }}
            >
              {/* Name */}
              <FormControl sx={{ marginTop: 1, minWidth: 300 }}>
                <TextField
                  id="outlined-controlled"
                  label="Name"
                  value={name}
                  size="small"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl sx={{ marginTop: 1, minWidth: 300 }}>
                <TextField
                  id="outlined-controlled"
                  label="Email"
                  value={email}
                  size="small"
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  error={email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)}
                  helperText={
                  email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
                    ? 'Please enter a valid email address'
                    : ''}
                />
              </FormControl>

              <FormControl sx={{ marginTop: 1, minWidth: 300 }}>
                <TextField
                  id="outlined-controlled"
                  label="Guest"
                  value={guestNumber}
                  type="number"
                  size="small"
                  onChange={(event) => {
                    setGuestNumber(event.target.value);
                  }}
                  error={guestNumber < 2}
                  helperText="Please enter atleast 2 guest "
                  slotProps={{
                    input: {
                      inputProps: { min: 1, step: 1 }, // Ensures only whole numbers
                    },
                  }} // Ensures only whole numbers
                />
              </FormControl>
              {/* Phone Number */}
              <FormControl sx={{ marginTop: 1, minWidth: 300 }}>
                <TextField
                  id="outlined-controlled"
                  label="Phone"
                  value={phoneNumber}
                  type="tel"
                  size="small"
                  onChange={handlePhoneChange}
                  error={phoneError}
                  helperText={
                    phoneError
                      ? "Please enter a valid 10-digit phone number"
                      : ""
                  }
                  slotProps={{
                    input: {
                      inputProps: { maxLength: 10 }, // Use slotProps.input to define maxLength
                    },
                  }}
                />
              </FormControl>
              {/* Timeslots */}

              <FormControl sx={{ marginTop: 1, minWidth: 300 }}>
                <InputLabel id="time-slot-label">Select Time</InputLabel>
                <Select
                  labelId="time-slot-label"
                  value={selectedTime}
                  label="Select Time"
                  onChange={handleTimeChange}
                  size="small"
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
                disabled={
                  !selectedTime || !name || !phoneNumber || !guestNumber
                }
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