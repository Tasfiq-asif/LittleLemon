
import { NavLink, Outlet } from "react-router-dom";
import {  Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import useRoles from "../hooks/useRole";

// Styled components for the side panel and links
const Sidebar = styled(Box)({
  width: "250px",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  left: 0,
  top: 0,
  borderRight: "1px solid #ddd",
});

const MainContent = styled(Box)({
  marginLeft: "250px",
  padding: "20px",
  flex: 1,
});

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "block",
  marginBottom: "10px",
  padding: "10px",
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: "bold",
  borderRadius: "4px",
  "&.active": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

const Dashboard = () => {
  const [role] = useRoles()

  return (
    <Box display="flex">
      <Sidebar>
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>
        <Stack spacing={2}>
          {role === "admin" && (
            <>
              <StyledNavLink to="/dashboard/add-item">Add Item</StyledNavLink>

              <StyledNavLink to="/dashboard/reservation-request">
                Reservation Requests
              </StyledNavLink>
            </>
          )}

          {role === "guest" && (
            <>
              <StyledNavLink to="/dashboard/Ordered-item">My Orders</StyledNavLink>

              <StyledNavLink to="/dashboard/myreservations">
                My Reservations
              </StyledNavLink>
            </>
          )}

          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </Stack>
      </Sidebar>
      <MainContent>
        {/* The Outlet component will render the nested routes */}
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default Dashboard;
