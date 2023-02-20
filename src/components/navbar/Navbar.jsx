import "./navbar.css";
// import { images } from "../../assets/index";
import { Menu,CancelOutlined } from "@mui/icons-material/";
// import { useState} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isMobile,setIsMobile]=useState(true)
  return(
    <nav className="navbar">
      <h1 className="nav-logo">Logo</h1>
      <ul className={ isMobile?"nav-link":"mobile-nav-link"} onClick={(()=>setIsMobile(false))}>
        <Link to='/' className="link-list">Home</Link>
        <Link to='/' className="link-list">Home</Link>
        <Link to='/' className="link-list">Home</Link>
        <Link to='/' className="link-list">Home</Link>
        <Link to='/' className="link-list">Home</Link>
        <Link to='/' className="link-list nav-signin mobli-nav-signin">Signup</Link>
      </ul>
      <button className="mobile-menu-icon" onClick={(()=>setIsMobile(!isMobile))}>
        {isMobile?<Menu className="menu-icon"/>:<CancelOutlined className="cancel-icon"/>}
      </button>
    </nav>
  );
}

export default Navbar;
