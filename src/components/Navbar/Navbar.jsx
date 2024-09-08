import { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/order", label: "Order Online" },
    { href: "/reserve", label: "Reservation" },
    { href: "/login", label: "Login" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "background.default", boxShadow: 0 }}
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
              Little Lemon
            </NavLink>
          </Typography>
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
              </Box>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: "block", sm: "none" },color: "black"}}
              >
                <MenuIcon  />
              </IconButton>
            )}
          </nav>
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
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
