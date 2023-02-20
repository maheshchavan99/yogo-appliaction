import "./banner.css";
import {images} from '../../../assets/index'
function Banner() {
  return (
    <div className="homebanner">
      <div className="banner-left">
        <div className="banner-containt">
          <h2>Experience the Benefits of Yoga</h2>
          <span>
            Yoga can help improve flexibility, strength, balance, and mental
            clarity. Our studio offers a wide range of classes for all levels,
            so you can find the perfect practice to meet your needs and goals
          </span>
          <button className="banner-btn">Join Now</button>
        </div>
      </div>
      <div className="banner-right">
        <img src={images.home_banner_image} alt="woman-yoga" />
      </div>
    </div>
  );
}

export default Banner;
