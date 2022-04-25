import "./MyCarousel.css";
import { Carousel } from "react-responsive-carousel";
import BoraBora from "../../assets/images/borabora.jpg";
import BoraBora2 from "../../assets/images/borabora2.jpg";
import Maldives from "../../assets/images/maldives.jpg";
import Maldives2 from "../../assets/images/maldives2.jpg";
import KeyWest from "../../assets/images/keywest.jpg";
import Maldives3 from "../../assets/images/maldives3.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <div name="views" className="container">
      <Carousel
        className={`carousel ${styles}`}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
        </div>
        <div>
          <img src={Maldives} alt="/" />
        </div>
        <div>
          <img src={Maldives2} alt="/" />
        </div>
        <div>
          <img src={Maldives3} alt="/" />
        </div>
        <div>
          <img src={KeyWest} alt="/" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
