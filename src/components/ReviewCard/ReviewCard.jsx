import { Avatar, Box, Card, CardContent, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";



const ReviewCard = ({name,img,rating,review}) => {
    console.log(review)
    return (
      <Card
        sx={{
          maxWidth: 245,
          width: "100%",
          boxShadow: 3,
          p: 2,
          mb: 3,
          height: 350,
          borderRadius: 5,
          overflow: "hidden"
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src={img} alt={name} sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item xs>
              <Typography variant="h6">{name}</Typography>
              <Box display="flex" alignItems="center">
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  precision={0.5}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {rating}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" color="text.secondary" mt={2}>
            {review}
          </Typography>
        </CardContent>
      </Card>
    );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard;