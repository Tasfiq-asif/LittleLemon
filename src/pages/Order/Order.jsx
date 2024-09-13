import { useEffect, useState } from "react";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useCart } from "../../providers/CartProvider";
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Order = () => {
    const [menuItems,setmenuItems] = useState([])
    const { cart, addToCart, updateQuantity, getItemQuantityCount } = useCart();
    const navigate = useNavigate();


    useEffect(()=>{
        const fetchItems = async ()=>{
            const { data } = await axiosPublic("/menu");
            setmenuItems(data)
        }
        fetchItems()
    }
    ,[])

    const handleQuantityChange = (item,increment) => {
        const existingItem = cart.find(cartItem=> cartItem._id === item._id)
        if (existingItem){
            const newQuantity = existingItem.quantity +increment
            if (newQuantity > 0){
                updateQuantity(item._id,newQuantity)
            }else{
                updateQuantity(item._id,0)
            }
        }
    }

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

                {/* {cart.length>0 && cart.find((cartItem) => cartItem._id === menuitem._id) ? (
                  <Box
                    mt={2}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={1}
                  >
                    <IconButton
                      onClick={() => handleQuantityChange(menuitem, -1)}
                      color="primary"
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" fontWeight={"bold"}>
                      {
                        cart.find((cartItem) => cartItem._id === menuitem._id)
                          .quantity
                      }
                    </Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(menuitem, 1)}
                      color="primary"
                    >
                      <Add />
                    </IconButton>
                    <Button
                     onClick={() => navigate('/cart')}
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      sx={{
                        mt: 2,
                        borderRadius: 4,
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Go to Cart
                    </Button>
                  </Box>
                ) : (
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
                    Add to Cart {menuitem>0?<>{menuitem.quantity}</>:<></>}
                  </Button>
                )} */}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    );
};

export default Order;