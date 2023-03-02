import "./navbar.css";
import { images}  from "../../assets/index";
import { Menu,CancelOutlined } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useState } from "react";
import {HOME,
APPOINTMENT,
CLASS,
SERVICE,
CONTACT} from '../../utils/cms'
function Navbar() {
  const [isMobile,setIsMobile]=useState(true)
  return(
    <nav className="navbar">
      {/* <h1 className="nav-logo">Logo</h1> */}
      <img src={images.logo_icon} alt=""   className="logo"/>
      <ul className={ isMobile?"nav-link":"mobile-nav-link"} onClick={(()=>setIsMobile(false))}>
        <Link to='/' className="link-list">{HOME}</Link>
        <Link to='/' className="link-list">{APPOINTMENT}</Link>
        <Link to='/' className="link-list">{CLASS}</Link>
        <Link to='/' className="link-list">{SERVICE}</Link>
        <Link to='/' className="link-list">{CONTACT}</Link>
        <Link to='/' className="link-list nav-signin mobli-nav-signin">Signup</Link>
      </ul>
      <button className="mobile-menu-icon" onClick={(()=>setIsMobile(!isMobile))}>
        {isMobile?<Menu className="menu-icon"/>:<CancelOutlined className="cancel-icon"/>}
      </button>
    </nav>
  );
}

export default Navbar;
