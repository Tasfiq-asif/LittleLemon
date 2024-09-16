
import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Header from "../../components/Header/Header";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const ReservationRequest = () => {

    const [reservationList, setReservationList] = useState([]);

    useEffect(()=>{
        const fetchedData =async()=>{
            const {data} = await axiosPublic("/reservation-request");
            setReservationList(data)
        }
        fetchedData()

},[])


const handleDelete = () => {
    console.log("delete")
}

    return (
      <div>
        <Header text={"Manage Reservations"} />
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Guest</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Cancel</TableCell>
            </TableHead>
            <TableBody >
              {reservationList.map((reservation) => (
                <TableRow key={reservation._id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.email}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.guest}</TableCell>
                  <TableCell>{reservation.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(reservation._id)}>
                      <DeleteIcon />
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