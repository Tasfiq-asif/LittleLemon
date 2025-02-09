import { useEffect, useState, Suspense } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useCart } from "../../providers/CartProvider";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import PageHeader from "../../components/Header/PageHeader";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Order = () => {
  const [menuItems, setmenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, getItemQuantityCount } = useCart();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPublic("/menu");
        setmenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <PageHeader text={"Order Food"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
          justifyItems: "center",
        }}
      >
        {menuItems.map((menuitem) => (
          <Card
            key={menuitem._id}
            sx={{
              width: { xs: 280, sm: 350, md: 420 },
              mb: 4,
              borderRadius: 4,
              boxShadow: 5,
            }}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <CardMedia
                loading="lazy"
                sx={{
                  width: 420,
                  height: 300,
                  mb: 4,
                  boxShadow: 5,
                  borderRadius: "4px 4px 0 0",
                }}
                component="img"
                image={menuitem.imageUrl}
                alt={menuitem.name}
              />
            </Suspense>
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
                onClick={() => addToCart(menuitem)}
                variant="contained"
                startIcon={<ShoppingCart />}
                sx={{
                  mt: 2,
                  borderRadius: 4,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Add to Cart
                {getItemQuantityCount(menuitem) > 0 && (
                  <p className="ml-2">{getItemQuantityCount(menuitem)}</p>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Order;
