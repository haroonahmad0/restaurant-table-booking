import { Box, Card, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function RestaurantDetails() {
  return (
    <>
      <Card>
        <Box w={1} display='flex' style={{ minHeight: "230px" }}>
          <Box
            w={1 / 2}
            height='auto'
            style={{
              //   backgroundColor: "red",
              minWidth: "35%",
              //   backgroundImage: `url(${process.env.PUBLIC_URL}/restaurant.jpeg)`,
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/round-table.svg"}
              style={{ width: 150, height: 150 }}
            />
          </Box>
          <Box w={1 / 2} p={2} height='auto' bgColor='secondary'></Box>
        </Box>
      </Card>

      {/* <img
          src={process.env.PUBLIC_URL + "/round-table.svg"}
          style={{ width: 150, height: 150 }}
        />
        <img
          src={process.env.PUBLIC_URL + "/dining.svg"}
          style={{ width: 30, height: 30 }}
        /> */}
    </>
  );
}

export default RestaurantDetails;
