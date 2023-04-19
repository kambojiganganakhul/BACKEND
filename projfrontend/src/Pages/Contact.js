import React from "react";
import BasicExample from "./founder";
import Ka from "./cofounder";
import Ra from "./cofounder1";
import Layout from "../Components/Layout";
import '../Styles/App.css';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";


const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Our South Paradise Resturants</Typography>
        <p>
        Facing issues with your orders? No problem, we are just one click away for you.

Contact us through our various official handles.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "100%",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "goldenrod", color: "black" }}
                  align="center"
                >
                  OUR FRANCHISES
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                
                  <ul>
                    <li>Near GT road Delhi ,534000</li>
                    <li>Near Beach Road Vizag,144011</li>
                    <li>Near 4th Bridge Rajamundry,100876</li>
                    <li>Near Benz Circle Vizayawada,342321</li>
                    <li>Near Soraja Nagar Delhi ,500001</li>

                  </ul>
                </TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
        <div className="App19">
        <TableContainer component={Paper} >
          <Table aria-label="contact table" >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{  }}
                  
                >
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 <BasicExample/>
                </TableCell>
                <TableCell>
                 <Ka/>
                </TableCell>
                <TableCell>
                 <Ra/>
                </TableCell>
                
              </TableRow>
              
              
               
             
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </Box>
    </Layout>
  );
};

export default Contact;