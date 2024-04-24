"use client";
import React from "react";
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { FaCartPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <MUICard
      sx={{
        width: { xs: "100%", sm: "320px" }, // Full width on smaller screens, 320px on larger screens
        borderRadius: "16px",
        border: "1px solid blue",
        backgroundColor: "white", // Use white instead of bg-zinc-100 for consistency
        boxShadow: 3, // Default shadow for MUI cards
        padding: "16px",
      }}
    >
      <CardMedia
        component="img"
        height="230" // Height of the image
        image="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Pizza Best 1"
        sx={{
          borderRadius: "16px", // Rounded corners
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Pizza Best 1
        </Typography>

        <Typography variant="body1" color="text.secondary">
          $20
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 2 }}
        >
          <Button variant="contained" color="primary" endIcon={<FaCartPlus />}>
            Add to Cart
          </Button>

          <Button variant="outlined" color="primary">
            View
          </Button>
        </Box>
      </CardContent>
    </MUICard>
  );
};

export default Card;
