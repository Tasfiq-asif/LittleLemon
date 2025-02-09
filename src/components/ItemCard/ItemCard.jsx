import { ShoppingCart } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";

const ItemCard = ({ menuitem }) => {
  ItemCard.propTypes = {
    menuitem: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  };

  const navigate = useNavigate();
  return (
    <div>
      <Card
        key={menuitem._id}
        sx={{
          width: {
            xs: 280, // Full width for extra small screens
            sm: 300, // Width for small screens
            md: 400, // Width for medium screens
            lg: 400, // Width for large screens
          },
          height: {
            xs: 400, // Height for extra small screens
            sm: 500, // Height for small screens
            md: 620, // Height for medium screens
            lg: 620, // Height for large screens
          },

          mb: 4,
          borderRadius: 4,
          boxShadow: 5,
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)", // Slightly scale the card on hover
          },
        }}
      >
        <CardMedia
          component={"img"}
          image={menuitem.imageUrl}
          alt={menuitem.name}
          sx={{
            borderRadius: "4px 4px 0 0",
            objectFit: "cover", // Adjust this to "contain" if you want to preserve aspect ratio
            width: "100%", // Ensure the image takes up the full width
            height: {
              xs: 180,
              sm: 280,
              md: 380,
            }, // Ensure the height is as specified
            transition: "transform 0.3s ease-in-out", // Smooth image scaling
            "&:hover": {
              transform: "scale(1.1)", // Scale image slightly on hover
            },
          }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {menuitem.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            {menuitem.description}
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            fontWeight="bold"
            mb={2}
          >
            ${menuitem.price}
          </Typography>
          <CustomButton 
            variant="primary"
            onClick={() => navigate("/order")}
            className="mt-2 flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            View All Items
          </CustomButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemCard;
