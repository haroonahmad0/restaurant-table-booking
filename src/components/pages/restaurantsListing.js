import {
  Grid,
  Box,
  Card,
  Container,
  Typography,
  CardHeader,
  CardContent,
  Divider,
} from "@material-ui/core";
import React from "react";
import SearchBar from "material-ui-search-bar";
import RestaurantListingCard from "../restaurantListingCard";
function RestaurantsListing() {
  return (
    <>
      <Grid
        xs={12}
        display='flex'
        flex={1}
        flex='column'
        style={{ height: "100%", width: "100%" }}
      >
        <Box p={5}>
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

        <Grid justify='center' align='center' flex={1} Container>
          <Container maxWidth='md'>
            <Box
              py={1}
              p={2}
              style={{ backgroundColor: "#F0F0F0", overflow: "scroll" }}
            >
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
              <Box p={2}>
                <Divider />
              </Box>
              <RestaurantListingCard />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default RestaurantsListing;
