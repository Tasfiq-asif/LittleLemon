import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import PageHeader from "../../components/Header/PageHeader";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from "@mui/material";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const MyReservations = () => {
    const {user} = useAuth()

    const [reservations, setReservations] = useState([])
    const [loading,setLoading] =useState(true)

    const getStatusColor = (status) =>{
        switch(status){
            case 'approved':
                return "#659b39";
            case 'pending':
                return "#f4ce13";
        }
    }


   
    useEffect(() => {
      const fetchReservations = async () => {
          setLoading(true)
        try {
          if (user && user.email) {
            const { data } = await axiosSecure(`/reservation/${user.email}`);
            setReservations(data);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

       if (user) {
         fetchReservations();
       }
    }, [setLoading, user]);

    if (loading)
      return (
        <LoadingSpinner/>
      );

    return (
      <div>
        <PageHeader text={"My Reservations"} />
        {reservations.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Guest</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations.map((reservation, index) => (
                  <TableRow key={index}>
                    <TableCell>{reservation.date}</TableCell>
                    <TableCell>{reservation.email}</TableCell>
                    <TableCell>{reservation.guest}</TableCell>
                    <TableCell>{reservation.name}</TableCell>
                    <TableCell>{reservation.phone}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          border: 1,
                          borderRadius: 25,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          width: 90,
                          py: 1,
                          background: getStatusColor(reservation.status),
                        }}
                      >
                        {reservation.status}
                      </Box>
                    </TableCell>
                    <TableCell>{reservation.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          !loading && <h1>You have not added any reservation yet</h1>
        )}
      </div>
    );
};

export default MyReservations;