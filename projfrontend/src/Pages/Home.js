import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'
import '../Styles/App.css'
const Home = () => {
  return (
    <Layout>
      <div>
      <div className='Home' >
        <div className='headercontainer'>
          <div className='App'> 
           <p className='App1'>South Paradise</p>
           <p className='App9'>Get Your Tummy Full</p>
           <div>
           
           <Link  to="/Menu" >
             <button className='App6'>ORDER</button>
           </Link>
           </div>
           </div>
        </div>

      </div>



      </div>
      
    </Layout>
  )
}

export default Home