
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface CopyrightProps extends React.HTMLAttributes<HTMLElement> {
  sx?: {
    mt: number;
    mb: number;
    text: string;
    color?: string | undefined;
  };
}

// function Copyright(props: CopyrightProps) {
//   const { sx, ...other } = props;
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...other}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {sx && <span style={{ color: sx.color }}>{sx.text}</span>}
//     </Typography>
//   );
// }

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setEmail(e.target.value);
// };

// const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setPassword(e.target.value);
// };
// const onSubmit = async (data: RegistrationData) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/auth/login",
//       data,
//       {
//         headers: { authorization: "test-token" },
//       }
//     );

//     const token = response.data.responseObj.token;
//     console.log("Login successful. Token:", token);
//     localStorage.setItem("userToken", token);
//     alert("Login successful");
//     setEmail("");
//     setPassword("");
//   } catch (error) {
//     console.error("Error during login:", error);
//     alert("Error during login");
//   }
// };

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.get('/api/users/emailExists', {
        params: { email: formData.get('email') }  
      });

      if (!response.data.exists) {
        setError('Email not found');
        return;
      }

      const loginResponse = await axios.post('/api/login', {
        email: formData.get('email'),
        password: formData.get('password')
      });

      setError('');
      localStorage.setItem('token', loginResponse.data.token);
      
    } catch (err) {
      console.error(err);
      setError('Unable to login. Please try again later.');
    }

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", padding: "20px" }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
      <CssBaseline />
    </ThemeProvider>
  );
}
