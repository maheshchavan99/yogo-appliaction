import "./booking.css";
import { images } from "../../assets/index";
import { CancelOutlined } from "@mui/icons-material/";
import { useState } from "react";
function BookingYoga() {
  const [isClose, setClose] = useState(true);
  return (
    <>
      {isClose ? (
        <div className="bookinng-yoga">
          <CancelOutlined
            className="CancelOutlined"
            onClick={() => setClose(false)}
          />
          <h1 className="heading">BOOKING YOGA CLASSES</h1>
          <div className="bookin-container">
            <div className="bookin-left">
              <img
                src={images.home_banner_image}
                alt=""
                className="booking-image"
              />
              <div className="bookleft-content">
                <span>Beginners Yoga</span>
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
                  <span className="medium">Thursday</span>
                  <span className="medium">24-0-2023</span>
                  <span className="medium">9:30 AM to 10:30 AM</span>
                  <span className="medium">Denny Liose</span>
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
