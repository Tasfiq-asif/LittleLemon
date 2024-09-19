import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  styled,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../providers/CartProvider";
import "./style.css"
import useRoles from "../../hooks/useRole";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, loading, logOut } = useAuth();
  const navigate =useNavigate()
  const {cart} =useCart()
  const [role] =useRoles()




  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/order", label: "Order Online" },
    { href: "/reserve", label: "Reservation" },

  ];

  //conditionally add Dashboard to Navbar

  if (role === 'admin' || role === 'guest'){
    routes.push({ href: "/dashboard", label:'Dashboard' });
  }

  const handleAuthAction = () => {
    if (user) {
      logOut();
      navigate("/login") // Call the logout function when user is authenticated
    } else {
      navigate("/login"); // Navigate to the login page if not authenticated
    }
  };

  if (loading){
    return <LoadingSpinner/>
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(73, 95, 87, 0.1)", // Semi-transparent background
          boxShadow: 0,
          zIndex: 1200, // Ensure the AppBar stays on top of other content
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              <h1 className="bordered-text">Little Lemon</h1>
            </NavLink>
          </Typography>
          <div className="flex justify-between">
            <nav>
              {!isMobile ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {routes.map((route) => (
                    <NavLink
                      key={route.label}
                      to={route.href}
                      style={({ isActive }) => ({
                        color: isActive
                          ? theme.palette.secondary.main
                          : theme.palette.text.primary,
                        textDecoration: isActive ? "underline" : "none",
                        margin: theme.spacing(0, 2),
                        padding: theme.spacing(1),
                        fontWeight: "500",
                      })}
                    >
                      {route.label}
                    </NavLink>
                  ))}
                  <Button onClick={handleAuthAction}>
                    {user ? "LogOut" : "LogIn"}
                  </Button>
                </Box>
              ) : (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: "block", sm: "none" }, color: "black" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </nav>
            {/* Cart */}
            <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
              <StyledBadge
                badgeContent={cart.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}
                color="secondary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {routes.map((route) => (
              <ListItem
                button
                component={NavLink}
                to={route.href}
                key={route.label}
              >
                <ListItemText primary={route.label} />
              </ListItem>
            ))}

            {!loading && (
              <ListItem
                button
                onClick={handleAuthAction} // Handle the login/logout action
                key={user ? "Logout" : "Login"}
              >
                <ListItemText primary={user ? "Logout" : "Login"} />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
