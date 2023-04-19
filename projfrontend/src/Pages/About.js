import React from 'react'
import Layout from '../Components/Layout'
import { Box, Typography,Button} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h3": {
            fontWeight: "medium",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3">Welcome To My Resturant</Typography>
        <h5>
          All orders and Payments must be made through online or over the Phone with a Credit Card
        </h5>
        <br />
        <p>
           We believe in excellence of making our Coustmers Happy With our Delightful Taste of our special Dishes<br/>
           Now We are pleased to Share that our franchises are going to Avalible all around INDIA within short Time
           For any Queries Kindly Visit  
           
        </p>
        <Link  to="/contact" className="App6" >
             <Button className="App6" >Click ME</Button>
           </Link>
        <p>
          For more information Go through our Links
          <br/>
          <br/>
          <br/>
          
          <ArrowDownwardIcon/>
        </p>
      </Box>
    </Layout>
  );
};

export default About;
