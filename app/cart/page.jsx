"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import { FaTrash, FaCartPlus } from "react-icons/fa6";

const initialCartItems = [
  {
    title: "Pizza Margherita",
    price: 20.0,
    quantity: 2,
    image:
      "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const onRemove = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  const onCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />

                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {item.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary">
                    ${item.price.toFixed(2)}
                  </Typography>

                  <Typography variant="body2" mt={1}>
                    Quantity: {item.quantity}
                  </Typography>

                  <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
                    <IconButton
                      color="error"
                      onClick={() => onRemove(item)}
                      aria-label="Remove item"
                    >
                      <FaTrash />
                    </IconButton>

                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<FaCartPlus />}
                      onClick={() => {
                        // Add more action, e.g., open product page or increase quantity
                      }}
                    >
                      Add More
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {cartItems.length > 0 && (
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Total: ${calculateTotal().toFixed(2)}
          </Typography>

          <Button variant="contained" color="primary" onClick={onCheckout}>
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
