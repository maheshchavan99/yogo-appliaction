import "./cards.css";
import { BOOK_SCHEDULS } from "../../utils/cms";
function Cards({cardData,handleClick}) {
  return (
    <div className="cards">
      <img src={cardData.image} alt="" />
      <div className="card-wrapper">
        <h2>{cardData.title}</h2>
        <div className="contents">
         {cardData.desc}
        </div>
        <hr />
        <div className="card-container">
          <div className="card-left">
            <span>{cardData.timelable} :</span>
            <span className="date-time">{cardData.time}</span>
          </div>
          <div className="card-rigth">
            <span>{cardData.instructorlable}</span>
            <span className="name">{cardData.name} </span>
          </div>
        </div>
        <button onClick={(()=>handleClick(cardData))}>{BOOK_SCHEDULS}</button>
      </div>
    </div>
  );
}

export default Cards;
