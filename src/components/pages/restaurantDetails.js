import {
  Box,
  Card,
  Grid,
  Container,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import query from 'querystring'
import { Link,  useLocation } from "react-router-dom";
import RestaurantTableCard from "../restaurantTableCard";
import InputLabel from "@material-ui/core/InputLabel";
import {makeStyles} from '@material-ui/core/styles'
import { useEffect, useState } from "react";
import axios from 'axios';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField,Select } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
function RestaurantDetails() {
  let  slug  = useLocation();
  const [options,SetOptions]=useState([]);
  //console.log('params', slug)
  //console.log({query: query.parse(slug.search)})
  const res_detail=query.parse(slug.search);
  //console.log(res_detail)
  localStorage.setItem('id'+res_detail['?id'],res_detail['?id'])
  const d=new Date();
  localStorage.setItem(res_detail['?id'],d.toDateString())

  const [data,setData]=useState([]);
  const [tables,setTables]=useState([]);
  async function getData()
  {
    const instance = axios.create({
      baseURL: 'http://localhost:1337'
  });
  const url='/restaurants/'+res_detail['?id'];
  //console.log(url);
  let res = await instance.get(url);
  const booking_url='/tables';
  let res2 = await instance.get(booking_url);





  console.log(res.data);
  console.log(res2.data);
  let op =[]
  let opentime=res.data.openTime;
  let closetime=res.data.closeTime;
    for (let i=parseInt(opentime);i<=parseInt(closetime);i++){
      //console.log("loop")
      op.push(i);
    }

    SetOptions(op);

  setData(res.data);
  setTables(res2.data);
  //console.log(tables)
  
        
  }
  let count=0;
function book(ob,date,time){
count=0;
console.log(ob);

for (let i=0;i<ob.length;i++){
  if(((ob[i].booking_date)==(date) ) && (parseInt(ob[i].booking_time)==parseInt(time))){
      count++
     }
    }
    console.log('count ',count)
if (count>0){
return false;
}
return true;
}
  
  
  
  

  

useEffect(()=>{
   getData();
  //console.log(data);

  
},[])
const [date,setDate]=useState('');
const [time,setTime]=useState('');
const useStyles = makeStyles((theme)=>({

  root: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      
   
  },
  image: {
      minHeight: 500,
      marginRight: 10,
  
      width: '200'
  }


}))
const classes = useStyles();
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();


  return (
  
<>


                <Container>
                <div className={classes.root}>
                    <img width={696} height={378} alt='some image' src={data.id && 'http://localhost:1337'+data.images[0].url}/>
   
                  <Box display='flex' ml={5} flexDirection='column' >
                      <Box p={2}>
                          <Typography variant='h4'>{data.Name}</Typography>
                      </Box>
                      <Box p={2}>
                          <Typography variant='h6'>{data.address}</Typography>
                      </Box>
                      <Box p={2}  display='flex' >
                      <LocationOnSharpIcon color='primary'/> <Typography variant='body1'>{data.city}</Typography>
                      </Box>

                      <Box p={2}>
                          <Typography variant='caption'>{data.description}</Typography>
                      </Box>

                      <Box p={2}>
                          <Rating readOnly value={data.rating}/>
                      </Box>
                  </Box>

                </div>



    </Container>

<Box>
    <TextField type="date" 
 InputProps={{inputProps: { min:yyyy+'-'+mm+'-'+dd} }}
    onChange={(e) => {setDate( e.target.value)}}/>


{/* <TextField type="time" 
 InputProps={{inputProps: { min:yyyy+'-'+mm+'-'+dd} }}
    onChange={(e) => {setTime( e.target.value)}}/> */}
{/* {console.log(options)} */}
<InputLabel id="demo-simple-select-label">Time</InputLabel>
<Select
labelId="demo-simple-select-label"
    onChange={(e) => {setTime( e.target.value)}}
    
            >
            {options.map(( value) => <MenuItem value={value} >{value}</MenuItem>)}
</Select >
</Box>
{/* <Autocomplete
      id="combo-box-demo"
      //options={data}
      //getOptionLabel={(option) => option.Name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="time" variant="outlined" />}
    /> */}






    {console.log(date,time)}

      {
        (date && time) && [
        <Grid
        xs={12}
        display='flex'
        flex={1}
        flex='column'
        style={{ height: "100%", width: "100%" }}
      >
        <Grid justify='center' align='center' flex={1} Container>
          <Container maxWidth='md'>
            <Box
              py={1}
              p={2}
              style={{ backgroundColor: "#F0F0F0", overflow: "scroll" }}>


                      {
                            (data.id )&& data.tables.map((obj)=>{
                            
                            return ( 
                              
                              <div key={obj.id}>
                                {((tables[obj.id-1].bookings).length==0)?(<RestaurantTableCard obj={obj} date={date} time={time}  />)
                                :
                                (
                                 
                                book(tables[obj.id-1].bookings,date,time)&&(<RestaurantTableCard obj={obj} date={date} time={time}  />)
                                )                          
                              }
                        
                            </div>
                             )
                          })
                      }

              


            </Box>


          </Container>
        </Grid>
      </Grid>
        ]
      }

  </>




          
  /* {
data.id &&(console.log('test'), console.log(data.images[0]),
console.log(data.tables[0]))
                }
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
</> */

  );
}

export default RestaurantDetails;
