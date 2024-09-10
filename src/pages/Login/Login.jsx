import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);



  // Basic validation
  const validate = () => {
    let tempErrors = {};
    tempErrors.email = /\S+@\S+\.\S+/.test(email) ? "" : "Enter a valid email";
    tempErrors.password =
      password.length >= 6 ? "" : "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => error === "");
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign In Successful");
      navigate(from);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        signIn(email, password);
        toast.success("Sign In Successful");
        navigate(from);
      } catch (err) {
        toast.error(err?.message);
      }
    }
  };

  // Display a loading spinner while loading
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f4f6f8"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Render the login form only if user is not logged in
  if (user) return null;

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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
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
        <Button
          type="button"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            padding: "10px",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleGoogleSignIn}
        >
          <Google sx={{ mr: 1 }} />
          Sign In with Google
        </Button>
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
