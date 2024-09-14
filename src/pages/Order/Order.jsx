import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useCart } from "../../providers/CartProvider";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";




const Order = () => {
    const [menuItems,setmenuItems] = useState([])
    const { cart, addToCart, getItemQuantityCount } = useCart();



    useEffect(()=>{
        const fetchItems = async ()=>{
            const { data } = await axiosPublic("/menu");
            setmenuItems(data)
        }
        fetchItems()
    }
    ,[])


console.log(cart)
    return (
      <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          fontWeight="bold"
          color="primary"
        >
          Order Food
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          gap={4}
        >
          {menuItems.map((menuitem) => (
            <Card
              key={menuitem._id}
              sx={{ width: 300, mb: 4, borderRadius: 4, boxShadow: 5 }}
            >
              <CardMedia
                component={"img"}
                height={"180"}
                image={menuitem.imageUrl}
                alt={menuitem.name}
                sx={{ borderRadius: "4px 4px 0 0" }}
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
                  Add to Cart{getItemQuantityCount(menuitem) > 0 && <p className="ml-2">{getItemQuantityCount(menuitem)}</p>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    );
};

export default Order;