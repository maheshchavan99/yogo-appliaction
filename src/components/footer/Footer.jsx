import React from "react";
import "./footer.css";
import { images } from "../../assets/index";

import {
  Facebook,
  Phone,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material/";
function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <h2 className="footer-heading">
          <img src={images.logo_icon} alt="" />
          Yoga
        </h2>
        <div className="containt col">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quidem explicabo illo corrupti. Ipsam sequi, magni voluptas
            doloremque quam quo hic officiis error eveniet odio sint omnis esse
            adipisci cupiditate.
          </span>
        </div>
      </div>

      <div className="wrapper">
        <h2>Pages</h2>
        <div className="containt">
          <span>Home</span>
          <span>Classes</span>
          <span>Trainers</span>
          <span>Services</span>
          <span>MY Appointment </span>
        </div>
      </div>
      <div className="wrapper">
        <h2>Service</h2>
        <div className="containt">
          <span>Beginners Yoga</span>
          <span>Pregnancy Yoga</span>
          <span>Advanced Yoga</span>
          <span>Kids Yoga</span>
          <span>Kids Yoga</span>
          <span>Intermediate Yoga</span>
        </div>
      </div>
      <div className="wrapper">
        <h2>Contact</h2>
        <div className="containt">
          <span className="footer-icon">
            <Phone className="footer-icons" />
            +91 9945953925
          </span>

          <span className="footer-icon">
            <Phone className="footer-icons" />
            yogastudio@gmail.com
          </span>
          <span className="footer-icon">
            <Phone className="footer-icons" />
            Bangalore, Karnataka, India
          </span>

          <div className="icon">
            <Facebook className="socila-media-icon" />
            <Twitter className="socila-media-icon" />
            <LinkedIn className="socila-media-icon" />
            <Instagram className="socila-media-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
