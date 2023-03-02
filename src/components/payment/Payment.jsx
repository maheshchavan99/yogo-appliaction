import "./payment.css";
import { Close } from "@mui/icons-material/";
import { useState } from "react";
import { BILING_LABLE, CARD_DETAILS, CLASS_HEADING, DATE_LABLE, FEE_LABLE, INSTRUCTOR_LABLE, LOCATION_LABLE, ONLINE_LABLE, PATMENT_LABLE, PAYMENT_HEADING, PAYPAL, YOGO_STUDIO_LABLE } from "../../utils/cms";
function Payment() {
  const [isClose, setClose] = useState(true);

  return (
    <>
      {isClose ? (
        <div className="payment">
          <Close className="close-payment" onClick={() => setClose(false)} />
          <h1>{PAYMENT_HEADING}</h1>
          <div className="payment-wrpper">
            <div className="payment-left">
              <h1>{CLASS_HEADING}</h1>
              <div className="payment-bookin-info">
                <span className="small-text-blod">{DATE_LABLE}</span>
                <span>24-02-2023 9:30 AM to 10:30 AM</span>
                <span className="small-text-blod">{INSTRUCTOR_LABLE}</span>
                <span>Denny Liose</span>
                <span className="small-text-blod">{LOCATION_LABLE}</span>
                <span>Online</span>
                <span className="biling-header"> {BILING_LABLE}</span>
                <div className="billing-details col">
                  <div className="billing">
                    <span>{FEE_LABLE}</span>
                    <span>{YOGO_STUDIO_LABLE}</span>
                    <span>{ONLINE_LABLE}</span>
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
              <h1>{PATMENT_LABLE}:</h1>
              <div className="payment-method">
                <input type="radio" />
                <label htmlFor="">{CARD_DETAILS}</label>
                <br />
                <input type="radio" />
                <label htmlFor="">{PAYPAL}</label>
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
