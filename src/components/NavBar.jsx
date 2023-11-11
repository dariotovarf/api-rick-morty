import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function NavBar() {
  return (
    <>
    <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router></>
  )
}
