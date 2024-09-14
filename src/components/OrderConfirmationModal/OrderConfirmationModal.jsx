import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const MySwal = withReactContent(Swal);
const OrderConfirmationModal = ({ open, handleClose, userData, orderData,setCart,setName,setEmail,setAddress,setPhone }) => {
  const [loading, setLoading] = useState(false);

 const saveUserMutation = useMutation({
   mutationFn: (userData) => axiosPublic.post("/user", userData),
   onSuccess: () => {
     toast.success("User data saved successfully");
   },
   onError: (error) => {
     console.error("Error saving user data", error);
   },
 });


  const confirmOrderMutation = useMutation({
    mutationFn: (orderData) => axiosPublic.post("/confirm-order", orderData),
    onSuccess: () => {
      MySwal.fire({
        icon: "success",
        title: "Order Confirmed",
        text: "Thank you for your order",
      });
      handleClose();
      setCart([])
      setAddress("")
      setPhone("")
      setEmail("")
      setName("")
    },
    onError: (error) => {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to confirm order",
      });
      console.error(error);
    },
  });


  const handleConfirm = async () => {
    setLoading(true);
    try {
      await saveUserMutation.mutateAsync(userData);
      await confirmOrderMutation.mutateAsync(orderData);
    } catch (error) {
      console.error(error);
    }
  };
console.log(orderData);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Confirm your Order</DialogTitle>
        <DialogContent>
          {loading ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              minHeight={"200px"}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              <Typography variant="h6" gutterBottom>
                Order Details
              </Typography>
              {orderData.orderItems.map((item, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="body1">
                    {item.itemName}: {item.quantity} x $
                    {item.quantity * Number(item.itemPrice)}
                  </Typography>
                </Box>
              ))}
              <Typography variant="h6" gutterBottom>
                Total: ${orderData.totalPrice}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" disabled={loading}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

OrderConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  orderData: PropTypes.shape({
    orderItems: PropTypes.arrayOf(
      PropTypes.shape({
        itemId: PropTypes.string.isRequired,
        itemName: PropTypes.string.isRequired,
        itemPrice: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    totalPrice: PropTypes.number.isRequired, // Add totalPrice here
  }).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  setCart: PropTypes.func,
  setName: PropTypes.func,
  setAddress: PropTypes.func,
  setPhone: PropTypes.func,
  setEmail: PropTypes.func,
};



export default OrderConfirmationModal;