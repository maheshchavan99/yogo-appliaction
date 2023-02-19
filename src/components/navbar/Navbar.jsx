import "./navbar.css";
import { images } from "../../assets/index";
import { Menu,CancelOutlined } from "@mui/icons-material/";
import { useState} from "react";
function Navbar() {
  // const [isNavBar, setNava] = useState(false);
  // const hadlenavbar = () => {
  //   setNava(true)
  // };
  return (
    <div className="nav-warrper">
      <img src={images.logo_icon} alt="yoga" />
      
        <ul>
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li className="active">
            <a href="" className="active">
              Appointments
            </a>
          </li>
          <li className="active">
            <a href="" className="active">
              Classes
            </a>
          </li>
          <li className="active">
            <a href="" className="active">
              Service
            </a>
          </li>
          <li className="active">
            <a href="" className="active">
              Contact
            </a>
          </li>
        </ul>
      
      <Menu className="menu-icon"/>
    </div>
  );
}

export default Navbar;
