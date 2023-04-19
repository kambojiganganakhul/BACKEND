import { CardActionArea, CardMedia, Card, CardContent, Typography ,Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Layout from '../Components/Layout';
import {Menulist} from './data';
import {Link} from "react-router-dom";
import '../Styles/App.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const Menu = () => {
  return (
     <Layout >
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {
            Menulist.map(menu =>(
              <Card sx={{maxWidth:'250px', display:'flex', m:2}}>
              <CardActionArea>
               <CardMedia sx={{minHeight:'350px'}} 
               component={'img'} 
               src={menu.image} 
               alt={menu.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom={"div"} >
                   {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                
                  <Typography variant='body2'>
                  <div className='App15'>
                  <Button sx={{backgroundColor:'goldenrod'}}>
                    {/* <Link to="  className='App10'> */}
                      <CurrencyRupeeIcon sx={{ fontSize: 15,color:'black' }}/>
                      {menu.price }
                    {/* </Link> */}
                    
                    </Button>
                    <Link to="/PagenotFound" className='App10' >
                    <Button sx={{backgroundColor:'goldenrod'}}>
                          Order Now
                    </Button>
                    </Link>
            
                    
                    </div>
                  </Typography>
                  
                  </CardContent> 
              </CardActionArea>
              </Card>
            ))
          }
      </Box>
     </Layout>
      
    
  );
};

export default Menu