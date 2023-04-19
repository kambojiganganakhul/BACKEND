import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Pagenotfound from "./Pages/Pagenotfound";
import Login from "./kart/Login";
import Reg from './Pages/Registration';
import Logout from "./Pages/Logout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Reg" element={<Reg/>}/>
          <Route path="/Log" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;