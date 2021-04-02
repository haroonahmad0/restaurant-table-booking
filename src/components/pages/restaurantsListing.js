import {
  Grid,
  Box,
  Card,
  Container,
  Typography,
  CardHeader,
  CardContent,
  Button ,
  Divider,
} from "@material-ui/core";
import query from 'querystring'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory, 
} from "react-router-dom";
import React from "react";
import SearchBar from "material-ui-search-bar";
import RestaurantListingCard from "../restaurantListingCard";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from "react";
import axios from 'axios';

function RestaurantsListing() {
  const [req,setReq]=useState('');
  const [data,setData]=useState([]);
  const history = useHistory();
  let  slug  = useLocation();
  console.log('params', slug)
  console.log({query: query.parse(slug.search)})
  const search_res=query.parse(slug.search);
  console.log(search_res)
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
  count=0;
   getData();
   

},[])
const [S_query,setQuery]=useState('');
console.log(S_query)
let count=0;
function showResturants(obj){

return (
  <React.Fragment key={obj.id}>
  <RestaurantListingCard obj={obj}/>
    <Box p={2}>
      <Divider />
    </Box>
    </React.Fragment>
)
}

  return (
    <>
      <Grid
        xs={12}
        style={{ height: "100%", width: "100%",flexDirection:'column',display:'flex' }}
      >
        <Box pt={10} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable

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
                    onInputChange={(e,value) => {setQuery( value)}}

                    style={{
                      width: 700
                    }}
                    
                  />


                <Button size='large' color='primary' variant='contained' 
                  onClick={() => (
                    console.log('on click'+S_query.Name),
                    
                    (typeof(S_query)=="object") 
                    ?
                    [
   
                     history.push("/restaurants?q="+S_query.Name),
                     //setQuery('')
                    ]
                    :
                    history.push("/restaurants?q="+S_query) 
                  )
                  
                }
                //onMouseUp={()=>(setQuery(""))}
                >
                  {" "}
                  Search

                </Button>
              
            
                  {/* </div> */}


          </Box>
        {/* <Box p={5}>
          <SearchBar
     
            onChange={(value) => setReq(value)}
            onRequestSearch={() => 
              history.push("/restaurants?q="+req)
            }
            style={{
              margin: "0 auto",
              maxWidth: 800,
            }}
          />
        </Box> */}



        <Grid justify='center' align='center' flex={1} Container>
          <Container maxWidth='md'>
            <Box
              py={1}
              p={2}
              style={{ backgroundColor: "#F0F0F0", overflow: "scroll" }}
            >
              {
                  (search_res['?q'])
                  ?[
                   
                    data.length >0 && data.map((obj)=>{
                    return(  
                      obj.Name.search(search_res['?q'])>=0 && (
                        count++,
                        showResturants(obj)
                      ))
                    }),

                    (count==0)&&data.map((obj)=>{
                      return(showResturants(obj)) 
                    })

                  ]
                  :
                  data.length >0 && data.map((obj)=>{
                  return(showResturants(obj)) 
                })
                  
              }
              


            </Box>


          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default RestaurantsListing;
