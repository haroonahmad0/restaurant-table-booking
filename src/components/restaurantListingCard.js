import { Box, Card, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function restaurantListingCard({ image, title }) {
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
              backgroundImage: `url(${process.env.PUBLIC_URL}/restaurant.jpeg)`,
            }}
          ></Box>
          <Box w={1 / 2} p={2} height='auto' bgColor='secondary'>
            <Box display='flex' m={1}>
              <Typography variant='h3' align='left'>
                {" "}
                BBQ Tonight
              </Typography>
            </Box>
            <Box display='flex' m={1}>
              <Typography variant='body1' align='left'>
                7A، 3 Mian Mehmood Ali Kasoori Rd,Gulberg III,
              </Typography>
            </Box>
            <Box
              display='flex'
              m={1}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                // width: "11rem",
              }}
            >
              <Typography variant='body2' align='left'>
                The city of all-things-food has become home for us, and we plan
                to stay, leaving behind a mark that inspires our customers to
                love us even more.
              </Typography>
            </Box>
            <Box
              textAlign='flex-start'
              display='flex'
              justifyContent='flex-end'
              alignItems='flex-end'
              m={1}
              mt={1}
              mr={3}
            >
              <Link to='/detail'>
                <Button color='primary' variant='contained'>
                  {" "}
                  Details
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default restaurantListingCard;
