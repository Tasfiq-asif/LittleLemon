import { Container, Grid, Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Little Lemon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Citrus Avenue, Lemon City, LC 12345
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@littlelemon.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="/" color="text.primary" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/order" color="text.primary" underline="hover">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/reserve"
                  color="text.primary"
                  underline="hover"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" color="text.primary" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="text.primary" underline="hover">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  href="#"
                  color="text.primary"
                  underline="hover"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/littlelemon"
                  color="text.primary"
                  underline="hover"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  color="text.primary"
                  underline="hover"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/littlelemon"
                  color="text.primary"
                  underline="hover"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
            borderTop: "1px solid #ddd",
            paddingTop: "10px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
