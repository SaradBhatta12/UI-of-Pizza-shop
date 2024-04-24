"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2e2e2e", // Dark background color
        color: "#ffffff", // White text
        padding: "2rem 0", // Padding around the footer
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography>
              Our hotel offers a unique blend of comfort, elegance, and
              exceptional service. Enjoy your stay with us.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#home" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="#rooms" color="inherit" underline="hover">
              Rooms
            </Link>
            <br />
            <Link href="#services" color="inherit" underline="hover">
              Services
            </Link>
            <br />
            <Link href="#contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>123 Hotel St, City, Country</Typography>
            <Typography>+123 456 7890</Typography>
            <Typography>
              <EmailIcon fontSize="small" /> contact@hotel.com
            </Typography>
            <Box mt={2}>
              <IconButton
                color="inherit"
                href="https://www.facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.youtube.com"
                target="_blank"
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Hotel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
