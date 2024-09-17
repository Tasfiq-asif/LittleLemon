
import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Header from "../../components/Header/Header";
import { Box, Button, FormControl, IconButton,   MenuItem,  Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";


import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";



const ReservationRequest = () => {

    const [reservationList, setReservationList] = useState([]);
    const [startDate,setStartDate] =useState(null)
    const [endDate,setEndDate] = useState(null)


    const getButtonStyles = (status) => {
      switch (status) {
        case "pending":
          return { bgcolor: "#F4CE13", color: "#fff" }; // Yellow with white text
        case "approved":
          return { bgcolor: "#4CAF50", color: "#fff" }; // Green with white text
        default:
          return { bgcolor: "#B0B0B0", color: "#000" }; // Default color
      }
    };

      const fetchedData =async()=>{
            const {data} = await axiosPublic("/reservation-request");
            setReservationList(data)}

      useEffect(()=>{

        fetchedData()
      },[])


      const handleDelete = async (id) => {
          try {
            await axiosPublic.delete(`/deletereservation/${id}`);
            fetchedData()

          } catch (error) {
            console.log(error)
            toast.error('error deleting reservation')
          }
      }

      const handleStatusChange = async (id, status) => {
        try {
          await axiosPublic.patch("/update-reservation-status", { _id: id, status });
          toast.success(`Reservation ${status} successfully`);
          fetchedData();
        } catch (error) {
          console.log(error);
          toast.error("Error updating reservation status");
        }
      };

      const filterReservationsByDate =  () => {
        if (!startDate || !endDate) return reservationList

        return reservationList.filter((reservation) => {
          const reservationDate =  new Date(reservation.date)
          return reservationDate >= startDate && reservationDate<=endDate
        })
      }


    return (
      <div>
        <Header text={"Manage Reservations"} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              gap: 2,
              flexWrap: "wrap",
              marginTop: "40px",
           
            }}
          >
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                    flex: 1,
                  }}
                />
              )}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                    flex: 1,
                  }}
                />
              )}
            />
          </Box>
        </LocalizationProvider>
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Guest</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Delete</TableCell>
            </TableHead>
            <TableBody>
              {filterReservationsByDate().map((reservation) => (
                <TableRow key={reservation._id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.email}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.guest}</TableCell>
                  <TableCell>
                    <FormControl variant="outlined" size="small">
                      <Select
                        value={reservation.status}
                        onChange={(event) =>
                          handleStatusChange(
                            reservation._id,
                            event.target.value
                          )
                        }
                        sx={getButtonStyles(reservation.status)}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(reservation._id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
};

export default ReservationRequest;