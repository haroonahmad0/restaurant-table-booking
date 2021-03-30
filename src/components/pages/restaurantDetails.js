import {
  Box,
  Card,
  Grid,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import RestaurantTableCard from "../restaurantTableCard";
function RestaurantDetails() {
  return (
    <>
      <Container
        maxWidth='xl'
        style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}
      >
        <Grid
          xs={12}
          maxWidth='sm'
          display='flex'
          flexDirection='row'
          style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}
        >
          <Grid item xs={3}>
            <RestaurantTableCard />
          </Grid>
          <Grid item xs={3}>
            <RestaurantTableCard />
          </Grid>
          <Grid item xs={3}>
            <RestaurantTableCard />
          </Grid>
          <Grid item xs={3}>
            <RestaurantTableCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RestaurantDetails;
