"use client";
import { Button, Box, Typography, Container } from "@mui/material";
import React from "react";

const Feature = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("products");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "96%",
        height: "90%",
        margin: "auto",
        borderRadius: "16px",
        mt: 2,
      }}
    >
      <img
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Feature"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)", // Slightly transparent overlay
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
            color: "white",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "3rem", // Smaller font for small screens
                sm: "5vmax", // Larger font for bigger screens
              },
            }}
          >
            Order Your <br /> Favorite Food Here
          </Typography>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            fugiat labore accusamus aperiam neque nemo minus fugiat consequuntur
            quo quia esse.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "white", // Keep text white
              borderColor: "white", // Border also white
            }}
            onClick={scrollToNext}
          >
            See More
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Feature;
