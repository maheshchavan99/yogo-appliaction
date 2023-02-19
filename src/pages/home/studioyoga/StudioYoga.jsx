import Cards from "../../../components/cards/Cards";
import "./studioyoga.css";
function StudioYoga() {
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
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>

    </div>
  );
}

export default StudioYoga;
