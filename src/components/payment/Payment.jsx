import "./payment.css";
import { Close } from "@mui/icons-material/";
import { useState } from "react";
function Payment() {
  const [isClose, setClose] = useState(true);

  return (
    <>
      {isClose ? (
        <div className="payment">
          <Close className="close-payment" onClick={() => setClose(false)} />
          <h1>Booking and Payment Info</h1>
          <div className="payment-wrpper">
            <div className="payment-left">
              <h1>Beginners Yoga Class</h1>
              <div className="payment-bookin-info">
                <span className="small-text-blod">Date and Time</span>
                <span>24-02-2023 9:30 AM to 10:30 AM</span>
                <span className="small-text-blod">Instructor</span>
                <span>Denny Liose</span>
                <span className="small-text-blod">Location</span>
                <span>Online</span>
                <span className="biling-header">Billing Details</span>
                <div className="billing-details col">
                  <div className="billing">
                    <span>Instructor Fess</span>
                    <span>Yoga Studio Fees</span>
                    <span>Online Class Fees</span>
                  </div>
                  <div className="billing">
                    <span>$ 8.00</span>
                    <span>$ 8.00</span>
                    <span>$ 8.00</span>
                  </div>
                </div>
              </div>
              <div className="total-amount">
                <span>Sub Total</span>
                <span>$ 24.00</span>
              </div>
            </div>
            <div className="payment-right">
              <h1>Payments Method :</h1>
              <div className="payment-method">
                <input type="radio" />
                <label htmlFor="">Debit/credit card</label>
                <br />
                <input type="radio" />
                <label htmlFor="">pay pal</label>
                <div className="input-filed">
                  <input type="text" style={{ width: "100%" }} />
                  <br />
                  <input type="text" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Payment;
