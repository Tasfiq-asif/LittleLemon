import { Avatar, Box, Card, CardContent, Rating, Typography } from "@mui/material";


const TestimonialCard = ({user}) => {
    return (
      <div>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: 4,
            boxShadow: 3,
            p: 2,
            backgroundColor: "#fff",
          }}
        >
          <Box display="flex" alignItems={"center"} mb={2}>
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              sx={{ width: 64, height: 64, mr: 2, borderRadius:50 }}
            />
            <Typography variant="h6" fontWeight={'bold'}>
                {user.name}
            </Typography>
          </Box>
          <CardContent>
        <Typography variant="body1" mb={2} color="text.secondary">
          {user.review}
        </Typography>
        <Rating
          name="user-rating"
          value={user.rating}
          readOnly
          precision={0.5}
          sx={{ color: "#FACC14" }} // Star color
        />
          </CardContent>
        </Card>
      </div>
    );
};

export default TestimonialCard;