import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type TextFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function SignUp() {
  const { register, handleSubmit } = useForm<TextFields>();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TextFields> = async (data) => {
    try {
      const response = await axios.post(
        "https://my-backend-project-9d14.onrender.com/api/register",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            authorization: "test-token",
          },
        }
      );

      if (response.status === 200) {
        console.log("Registration successful:", response.data.message);
        navigate(-1);
      } else if (response.status === 409) {
        setError("Email already exists. Please choose another.");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Unable to register, please try again later");
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" required fullWidth id="firstName" label="First Name" autoFocus {...register("firstName")} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" autoComplete="family-name" {...register("lastName")} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" autoComplete="email" {...register("email")} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Password" type="password" id="password" autoComplete="new-password" {...register("password")} />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
