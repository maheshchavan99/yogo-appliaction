import "./booking.css";
import { CancelOutlined } from "@mui/icons-material/";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function BookingYoga() {
  const [isClose, setClose] = useState(true);
  const storeValue=useSelector(state=>state)
  const {classDeatails}=storeValue ||{}
  const navigate=useNavigate()
  const closepopUp=()=>{
    setClose(false)
    navigate('/')
  }
  return (
    <>
      {isClose ? (
        <div className="bookinng-yoga">
          <CancelOutlined
            className="CancelOutlined"
            onClick={closepopUp}
          />
          <h1 className="heading">BOOKING YOGA CLASSES</h1>
          <div className="bookin-container">
            <div className="bookin-left">
              <img
                src={classDeatails.image}
                alt=""
                className="booking-image"
              />
              <div className="bookleft-content">
                <span>{classDeatails.title}</span>
                <span>$20</span>
              </div>
            </div>
            <div className="bookin-right">
              <ol>
                <li>
                  Find a good instructor: Look for an experienced yoga teacher
                  who can guide you through the practice and help you avoid
                  injury.
                </li>
                <li>
                  Start with basic poses: Start with basic poses like downward
                  dog, mountain pose, and warrior 1 before moving on to more
                  challenging poses.
                </li>
                <li>
                  Practice regularly: To get the most out of yoga, practice
                  regularly, even if it's just a few minutes each day.
                </li>
                <li>
                  Start with basic poses: Start with basic poses like downward
                  dog, mountain pose, and warrior 1 before moving on to more
                  challenging poses.
                </li>
                <li>
                  Practice regularly: To get the most out of yoga, practice
                  regularly, even if it's just a few minutes each day.
                </li>
              </ol>
              <div className="booking-details">
                <div className="deatils-left">
                  <span className="medium-bold">Day</span>
                  <span className="medium-bold">Data</span>
                  <span className="medium-bold">Timings</span>
                  <span className="medium-bold">Instructor</span>
                </div>
                <div className="deatilsleft">
                  <span className="medium">{classDeatails.day}</span>
                  <span className="medium">{classDeatails.date}</span>
                  <span className="medium">{classDeatails.time}</span>
                  <span className="medium">{classDeatails.name}</span>
                </div>
              </div>
              <button className="booking-btn">Book</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BookingYoga;
