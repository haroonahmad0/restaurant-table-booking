import {
  Box,
  Card,
  Grid,
  CardHeader,
  CardContent,
  Button ,
  Typography,
} from "@material-ui/core";
import React  from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "material-ui-search-bar";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import RestaurantListingPage from './restaurantsListing'
import RestaurantCard from "../restaurantCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const useStyles = makeStyles({
  banner: {
    flex: 1,
    height: "331px",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL}'/rest.jpeg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});
function Home() {
  const classes = useStyles();
  const [data,setData]=useState([]);

  async function getData()
  {
    const instance = axios.create({
      baseURL: 'http://localhost:1337'
  });

  let res = await instance.get('/restaurants')
  console.log(res.data)
  setData(res.data)
  }
useEffect(()=>{

   getData();
  

},[])
const [query,setQuery]=useState('');
console.log(query)
const history = useHistory();
  return (
    
    <>
    
      <Grid
        xs={12}
        
        flex='column'
        style={{ height: "100%", width: "100%",flexDirection:'column',display:'flex' }}
      >
        <Box className={classes.banner} mt={1}>
          <Box pt={10} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                  //  options={data}
                  //  getOptionLabel={data.length >0 && data.map((obj)=>{
                  //    return((obj.Name)) 
                  //  })}
                  options={data}
                  getOptionLabel={(option) => option.Name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        style={{backgroundColor:"white",}}
                        
                      />
                    )}
                    onChange={(e,value) => {setQuery( value)}}
                    

                    style={{
                      width: 700
                    }}
                  />

             
                <Button size='large' color='primary' variant='contained' 
                  onClick={() => (
                    console.log('on click'+query),
                    
                    (query) 
                    ?
                    [
   
                     history.push("/detail?id="+query.id)
                    ]
                    
                    
                    :
                    history.push("/restaurants") 
                  
                  )}
                >
                  {" "}
                  Search

                </Button>
              
            
                  {/* </div> */}


          </Box>
        </Box>
        <Box
          style={{
            marginBlock: "2rem",
            marginInline: "2rem",
            backgroundColor: "#F0F0F0",
          }}
        >
          <Typography variant='h4'>Popular Restaurants</Typography>

          {/* <CardHeader title='Recent Searches' subheader='September 14, 2016' /> */}
          <Box m={2}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition='all .5'
              transitionDuration={500}
              containerClass='carousel-container'
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
            >
              {
                data.length>0 && data.map((obj)=>{
                  
                    return (
                      (obj.isPopular) &&(
                      <div key={obj.id}>
                        
                      <RestaurantCard obj={obj} isRecent={false}/>
                    </div>
                      )
                    )
                  


                }

                )
              }


            </Carousel>
          </Box>



          {localStorage.key(0) && <Typography variant='h4'>Recent Searches</Typography>}

                    <Box m={2}>
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition='all .5'
                        transitionDuration={500}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                      >
                        {
                          data.length>0 && data.map((obj)=>{
                            
                              return (( obj.id==localStorage.getItem('id'+obj.id) ) &&(
                                <div key={obj.id}>
                                <RestaurantCard obj={obj} isRecent={true}/>
                              </div>
                               ))
                            })
                        }


                      </Carousel>
                    </Box>
          {/* {console.log(process.env)} */}
          {/* src={process.env.PUBLIC_URL + '/logo.png'} */}
          {/* <img src={RestImage} alt="Logo" /> */}
          {/* <img src={process.env.PUBLIC_URL+'rest.jpeg'} /> */}
        </Box>
      </Grid>
    </>
  );
}

export default Home;
