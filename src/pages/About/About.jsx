
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";


import './About-page.css'

const About = () => {


  return (
    <Box component="section" sx={{ padding: "40px 0" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              About Little Lemon
            </Typography>

        </motion.div>

        {/* Main About Section */}
        <div className="about-section">
          {/* History Section */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-text">
              <Typography variant="h4" gutterBottom>
                Our History
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Established in 1990, Little Lemon started as a family-owned
                restaurant. We focus on providing the best Mediterranean cuisine
                with a touch of modern innovation. Every dish we serve is
                prepared with the finest ingredients, keeping both tradition and
                modernity alive on every plate.
              </Typography>
            </div>
            <motion.div
              className="about-image"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={"https://i.ibb.co.com/ncyWMtG/hero.jpg"}
                alt="Chef at Little Lemon"
                sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
              />
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="about-content reverse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="about-image"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={"https://i.ibb.co.com/5Tbxtfb/Oceanfront-Penthouse.jpg"}
                alt="Little Lemon Restaurant"
                sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
              />
            </motion.div>
            <div className="about-text">
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our mission is to make every visit a memorable experience,
                offering delicious food in a comfortable environment. We strive
                to create an atmosphere where our guests feel at home, with
                exceptional service and a menu that caters to all tastes.
              </Typography>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-text">
              <Typography variant="h4" gutterBottom>
                The Little Lemon Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                From our fresh ingredients to our friendly staff, we ensure that
                every aspect of your dining experience is delightful. Come and
                taste the difference at Little Lemon, where every meal is
                prepared with passion and care.
              </Typography>
            </div>
            <motion.div
              className="about-image"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={"https://i.ibb.co.com/ssfhxPF/Grilled-Salmon.jpg"}
                alt="Food at Little Lemon"
                sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
};

export default About;
