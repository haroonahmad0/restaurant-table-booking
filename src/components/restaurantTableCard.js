import { Box, Card, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
function RestaurantDetails({obj, date , time}) {


  const [data,setData]=useState([]);

  async function getData()
  {
    const instance = axios.create({
      baseURL: 'http://localhost:1337'
  });
  const url='/restaurants/'+obj.restaurant;
  console.log(url);
  let res = await instance.get(url);
  //console.log(res.data);
  setData(res.data);
  }
  async function booking()
  {
    const instance = axios.create({
      baseURL: 'http://localhost:1337'
  });
  const url='/bookings';
  console.log(url);
  console.log(obj,date,time,'test1');
  const res = await instance.post(url,
    {
       booking_time:time,
       booking_date:new Date(date),
       tables:obj
    }
    );
  console.log(res,'res1');
  
}



useEffect(()=>{
   getData();
  console.log(data);
},[])
let opentime=data.openTime;
let closetime=data.closeTime;
console.log('table',obj,opentime,closetime)
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
                Table No: {obj.id}
              </Typography>
            </Box>
            <Box display='flex' m={1}>
              <Typography variant='body1' align='left'>
                Sitting Capacity: {obj.chairs}
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
                    {/* {description} */}
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
              
                <Button color='primary' variant='contained'
                onClick={()=>{booking()
                }}
                
                >
                  {" "}
                  Booking
                </Button>
              
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default RestaurantDetails;
