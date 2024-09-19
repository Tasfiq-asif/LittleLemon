import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PageHeader from "../../components/Header/PageHeader";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


const MyOrders = () => {
      const { user } = useAuth();

      const [orders, setOrders] = useState([]);
      const [loading, setLoading] = useState(true);

     useEffect(() => {
       const fetchReservations = async () => {
         setLoading(true);
         try {
           if (user && user.email) {
             const { data } = await axiosSecure(`/orderedItems/${user.email}`);
             setOrders(data);
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

     if (loading) return <LoadingSpinner />;
     console.log(orders)
    return (
      <div>
        <PageHeader text={"My Orders"} />
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <Box key={order._id} mb={3}>
              <Typography variant="h6">
                Order {index + 1} (ID: {order._id})
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.orderItems.map((item) => (
                      <TableRow key={item.itemId}>
                        <TableCell>{item.itemName}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${item.itemPrice}</TableCell>
                        <TableCell>${item.itemPrice * item.quantity}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} align="right">
                        <strong>Total Price:</strong>
                      </TableCell>
                      <TableCell>
                        <strong>${order.totalPrice}</strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box mt={2}>
                <Typography variant="body1">
                  <strong>Order Date:</strong> {order.orderTimestamp}
                </Typography>
                <Typography variant="body1">
                  <strong>Shipping Address:</strong> {order.userAddress}
                </Typography>
                <Typography variant="body1">
                  <strong>User Name:</strong> {order.userName}
                </Typography>
                <Typography variant="body1">
                  <strong>User Phone:</strong> {order.userPhone}
                </Typography>
                <Typography variant="body1">
                  <strong>User Email:</strong> {order.userEmail}
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography>You have no orders yet.</Typography>
        )}
      </div>
    );
};

export default MyOrders;