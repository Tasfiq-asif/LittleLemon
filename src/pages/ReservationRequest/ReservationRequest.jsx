
import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Header from "../../components/Header/Header";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";


const ReservationRequest = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchedData =async()=>{
            const {data} = await axiosPublic("/reservation-request");
            setData(data)
        }
        fetchedData()

},[])
console.log(data)

    return (
        <div>
            <Header text={"Manage Reservations"}/>
            <TableContainer component={Paper} sx={{marginTop:4}}>
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
                    <TableBody></TableBody>
                </Table>

            </TableContainer>
        </div>
    );
};

export default ReservationRequest;