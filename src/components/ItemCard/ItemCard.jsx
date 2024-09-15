import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ItemCard = ({menuitem}) => {

    const navigate = useNavigate()
    return (
      <div>
        <Card
          key={menuitem._id}
          sx={{
            width: {
              xs: 300, // Full width for extra small screens
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
                xs:180,
                sm:280,
                md:380
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
            <Button
              onClick={() => navigate("/order")}
              variant="contained"
              startIcon={<ShoppingCart />}
              sx={{
                mt: 2,
                borderRadius: 4,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              View All Items
            </Button>
          </CardContent>
        </Card>
      </div>
    );
};

export default ItemCard;