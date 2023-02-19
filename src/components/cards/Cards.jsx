import "./cards.css";
import { images } from "../../assets/index";
function Cards() {
  return (
    <div className="cards">
      <img src={images.home_banner_image} alt="" />
      <div className="card-wrapper">
        <h2>Beginners Yoga</h2>
        <div className="contents">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rutrum, sem ac euismod venenatis, turpis sapien ultrices dui, non
          sollicitudin
        </div>
        <hr />
        <div className="card-container">
          <div className="card-left">
            <span>TIMING :</span>
            <span className="date-time">9:30 AM to 10:30 AM</span>
          </div>
          <div className="card-rigth">
            <span>INSTRUCTOR</span>
            <span className="name">DENNIY LIOSE </span>
          </div>
        </div>
        <button>BOOK schedule</button>
      </div>
    </div>
  );
}

export default Cards;
