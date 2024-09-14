
import PropTypes from "prop-types";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const CartCard = ({ item, handleQuantityChange, removeFromCart, }) => {

  return (
    <div>
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
        {/* Image Section */}
        <Box display={"flex"} gap={2}>
          <Box
            component="img"
            src={item.imageUrl}
            alt={item.name}
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 2,
              mr: 2,
            }}
          />

          {/* Text section */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="textPrimary">
              {item.name}
            </Typography>

            {/* Changing Item amount */}
            <Box
              mt={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
            >
              <Typography variant="body1" fontWeight="bold">
                Number of items:
              </Typography>
              <IconButton
                onClick={() => handleQuantityChange(item, -1)}
                color="primary"
              >
                <Remove />
              </IconButton>

              <Typography variant="body1" fontWeight="bold">
                {item.quantity}
              </Typography>

              <IconButton
                onClick={() => handleQuantityChange(item, 1)}
                color="primary"
              >
                <Add />
              </IconButton>
            </Box>

            {/* Total Cost per Item */}
            <Typography variant="body2" color="textSecondary" mt={1}>
              Cost: {item.quantity} x ${item.price} = $
              {item.price * item.quantity}
            </Typography>
          </Box>
        </Box>

        <IconButton color="error" onClick={() => removeFromCart(item._id)}>
          <Delete />
        </IconButton>
      </Box>
    </div>
  );
};

// PropTypes validation
CartCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartCard;