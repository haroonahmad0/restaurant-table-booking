import { Box, Card, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function TableCard({obj}) {
//   const image='http://localhost:1337'+obj.images[0].url;
//   const name=obj.Name;
//   const address=obj.address;
//   const description=obj.description;
//   const id=obj.id;
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
              //backgroundImage: `url(${image})`,
            }}
          ></Box>
          <Box w={1 / 2} p={2} height='auto' bgColor='secondary'>
            <Box display='flex' m={1}>
              <Typography variant='h3' align='left'>
                {" "}
                {/* {name} */}
              </Typography>
            </Box>
            <Box display='flex' m={1}>
              <Typography variant='body1' align='left'>
                {address}
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
   {description}
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
              <Link to={'/detail?id='}>
                <Button color='primary' variant='contained'>
                  {" "}
                  Booking
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default TableCard;
