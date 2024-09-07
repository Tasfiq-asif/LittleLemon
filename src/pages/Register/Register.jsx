
import { Avatar, Grid2, Paper, TextField } from "@mui/material";
import { Lock } from "@mui/icons-material";


const Register = () => {

    const paperStyle = { padding:20,height:"70vh", width:280, margin:"20px auto"}
    const avatarStyle = { backgroundColor:'#1bbd7e'}
    return (
      <div className="bg-white h-screen pt-20">
        <Grid2>
          <Paper elevation={10} style={paperStyle}>
            <Grid2 align={'center'}>
              <Avatar style={avatarStyle}>
                <Lock/>
              </Avatar>
              <h2 className="text-2xl font-semibold"> Sign in</h2>
            </Grid2>
            <TextField label='Username' fullWidth required/>
          </Paper>
        </Grid2>
      </div>
    );
};

export default Register;