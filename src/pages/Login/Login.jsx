import{ useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Optional if you want to redirect after login

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Optional

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Basic validation
  const validate = () => {
    let tempErrors = {};
    tempErrors.email = /\S+@\S+\.\S+/.test(email) ? "" : "Enter a valid email";
    tempErrors.password =
      password.length >= 6 ? "" : "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => error === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle successful login (API call, redirect, etc.)
      console.log({ email, password });
      navigate("/dashboard"); // Optional, redirect to dashboard or other page
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" align="center" mb={2} color="primary">
          Welcome Back!
        </Typography>
        <Typography variant="body1" align="center" mb={4} color="textSecondary">
          Login to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px", mb: 2 }}
          >
            Log In
          </Button>
        </form>
        <Typography variant="body2" align="center" color="textSecondary">
          <p>Do not have an account?</p>
          <a
            href="/register"
            style={{ color: "#3f51b5", textDecoration: "none" }}
          >
            Sign up
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
