"use client";
import React from "react";
import Link from "next/link";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const FormPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px", // Spacing between form elements
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "8px",
              boxShadow: 3,
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              variant="h4"
              component="h1"
              textAlign="center"
              fontWeight="bold"
            >
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type="password"
            />
            <Typography variant="body2" color="textSecondary">
              <Link href={""}>Forgot your password?</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Dont have an account?{" "}
              <Link href={"/register"} className=" text-blue-800-">
                Signup
              </Link>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                textTransform: "none",
                // Keep text capitalization as is
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormPage;
