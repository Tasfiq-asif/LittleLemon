import { useState } from "react";
import { useCart } from "../../providers/CartProvider";
import { Box, Button, Divider,  TextField, Typography } from "@mui/material";
import {  ShoppingCart } from "@mui/icons-material";
import CartCard from "../../components/CartCard/CartCard";
import OrderConfirmationModal from "../../components/OrderConfirmationModal/OrderConfirmationModal";


const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getItemQuantityCount,setCart } =
    useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuantityChange = (item, increment) => {
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + increment;
      if (newQuantity > 0) {
        updateQuantity(item._id, newQuantity);
      } else {
        updateQuantity(item._id, 0);
      }
    }
  };

  const orderItems = cart.map((cartItem) => ({
    itemId: cartItem._id,
    itemName: cartItem.name,
    itemPrice: cartItem.price,
    quantity: getItemQuantityCount(cartItem),
  }));

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * getItemQuantityCount(item),
    0
  );

  // Generate current timestamp
  const timestamp = new Date().toLocaleString();

  const userData = { name, email, phone, address, role: "guest" };

  const orderData = {
    orderItems,
    totalPrice,
    userName: name,
    userEmail: email,
    userAddress: address,
    userPhone: phone,
    orderTimestamp: timestamp,
  };

  console.log(orderData);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={4}
      bgcolor="#f9f9f9"
      minHeight="100vh"
      sx={{
        flexDirection: {
          xs: "column", // Column direction for extra-small (mobile) screens
          sm: "column", // Column direction for small (tablet) screens
          md: "row", // Row direction for medium (desktop) screens and above
        },
        gap: {
          xs: 6,
          sm: 6,
          md: 0,
        },
      }}
    >
      {/* Cart Section */}
      <Box flex={1} p={3} boxShadow={3} bgcolor="white" borderRadius={4}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          <ShoppingCart fontSize="large" /> Your Cart
        </Typography>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartCard
              key={item._id}
              item={item}
              handleQuantityChange={handleQuantityChange}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" mt={4}>
            Your cart is empty.
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Total Cost */}
        {cart.length > 0 && (
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Total:
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="primary">
              $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Order Details Section */}
      <Box flex={1} ml={4} p={3} boxShadow={3} bgcolor="white" borderRadius={4}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Contact Details
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          fullWidth
          disabled={!name || !email || !phone || !address}
          onClick={() => setModalOpen(true)}
          sx={{
            mt: 4,
            py: 1.5,
            fontSize: "1rem",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Proceed
        </Button>
      </Box>
      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        orderData={orderData}
        userData={userData}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
        setCart={setCart}
      />
    </Box>
  );
};

export default Cart;