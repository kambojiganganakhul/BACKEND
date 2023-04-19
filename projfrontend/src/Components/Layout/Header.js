import { AppBar, Typography ,Toolbar,Divider} from '@mui/material'
import './Layout.css'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Header = () => {
  let usertp = sessionStorage.getItem('Usertype')
  if (usertp === null)
  {
  return (
    <>
     <Box>
      <AppBar component={"nav"} >
        <Toolbar className='bgclorfortoolbar'>
        <Typography color={"black"} variant="h5" component="div" sx={{flexGrow: 1}}>
          <DinnerDiningIcon />
          South Paradise
        </Typography>
        <Box sx={{display:{xs:'none',sm:'block'}} } >
          <ul className='navigationstyle'>
          <li className='App5'>
               <Link to={'/'}>Home</Link>
             </li>
             <li className='App2'>
               <Link to={'/Menu'}>Menu</Link>
             </li>
             <li className='App3'>
               <Link to={'/About'}>About</Link>
             </li>
             <li className='App4'>
               <Link to={'/Contact'}>Contact</Link>
             </li>
             <li className='App4'>
               <Link to={'/Login'}>Login</Link>
             </li>
             <li className='App4'>
               <Link to={'/Reg'}>Registration</Link>
             </li>
           
            
            {/* <li className='App4'>
              <Link to={'/'}>LogOut</Link>
            </li> */}
          </ul>
        </Box>
        </Toolbar>
        
        
      </AppBar>
      
     </Box>
     <Divider/>
    </>
  )
          }
    else if(usertp=== 'Nakhul')
    {
      return(
      <>
      <Box>
       <AppBar component={"nav"} >
         <Toolbar className='bgclorfortoolbar'>
         <Typography color={"black"} variant="h5" component="div" sx={{flexGrow: 1}}>
           <DinnerDiningIcon />
           South Paradise
         </Typography>
         <Box sx={{display:{xs:'none',sm:'block'}} } >
           <ul className='navigationstyle'>
             <li className='App5'>
               <Link to={'/'}>Home</Link>
             </li>
             <li className='App2'>
               <Link to={'/Menu'}>Menu</Link>
             </li>
             <li className='App3'>
               <Link to={'/About'}>About</Link>
             </li>
             <li className='App4'>
               <Link to={'/Contact'}>Contact</Link>
             </li>
             <li className='App4'>
               <Link to={'/Log'}>Logout</Link>
             </li>
            
             {/* <li className='App4'>
               <Link to={'/'}>LogOut</Link>
             </li> */}
           </ul>
         </Box>
         </Toolbar>
         
         
       </AppBar>
       
      </Box>
      <Divider/>
     </>
      )
    }
    
}

export default Header