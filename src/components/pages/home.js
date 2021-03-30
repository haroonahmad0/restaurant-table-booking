import {
  Box,
  Card,
  Grid,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

import RestaurantCard from "../restaurantCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  return (
    <>
      <Grid
        xs={12}
        display='flex'
        flex={1}
        flex='column'
        style={{ height: "100%", width: "100%" }}
      >
        <Box className={classes.banner} mt={1}>
          <Box pt={10}>
            <SearchBar
              //   dataSource={state.dataSource}
              //   onChange={(value) => setState({dataSource: [ value, value+value, value+value+value]})}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 800,
              }}
            />
          </Box>
        </Box>
        <Box
          style={{
            marginBlock: "2rem",
            marginInline: "2rem",
            backgroundColor: "#F0F0F0",
          }}
        >
          <Typography variant='h4'>Recent Searches</Typography>

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
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
              <div>
                <RestaurantCard />
              </div>
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
