import { useState } from "react";
import { useCart } from "../../providers/CartProvider";
import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import { Delete, ShoppingCart } from "@mui/icons-material";


const Cart = () => {
    const { cart, removeFromCart } = useCart();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [address, setAddress] = useState("");

      const handleOrder = () => {
        if (name && email && phone && address) {
          // Submit the order
          console.log("Order confirmed!", {
            cart,
            name,
            email,
            phone,
            address,
          });
        }
      };
console.log(cart)

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
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            <ShoppingCart fontSize="large" /> Your Cart
          </Typography>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Box
                key={item._id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                p={2}
                boxShadow={1}
                borderRadius={2}
                bgcolor="#f1f1f1"
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="textPrimary"
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Cost: {item.quantity}
                    X ${item.price}
                  </Typography>
                </Box>
                <IconButton
                  color="error"
                  onClick={() => removeFromCart(item._id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary" mt={4}>
              Your cart is empty.
            </Typography>
          )}
        <Divider />
        </Box>

        {/* Order Details Section */}
        <Box
          flex={1}
          ml={4}
          p={3}
          boxShadow={3}
          bgcolor="white"
          borderRadius={4}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
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
            onClick={handleOrder}
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
      </Box>
    );
};

export default Cart;