import Cards from "../../../components/cards/Cards";
import "./studioyoga.css";
import { cardData } from "../../../components/cards/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {userDetails} from "../../../store/userDetails";
function StudioYoga() {
  const navigator = useNavigate();
  const dispatch = useDispatch()
  const handleClick = (data) => {
    if(data){
      dispatch(userDetails(data))
      navigator("/yogabook")
    }
  };
  return (
    <div className="studioyogo">
      <div className="studioyogo-wrapper">
        <h2>Yoga Studio Classes</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          rutrum, sem ac euismod venenatis, turpis sapien ultrices dui, non
          sollicitudin mi est at nisi
        </span>
      </div>
      <div className="card-contents">
        {cardData?.map((data) => (
          <Cards cardData={data} handleClick={handleClick} id={data.id} />
        ))}
      </div>
    </div>
  );
}

export default StudioYoga;
