import "./Destinations.css";
import BoraBora from "../../assets/images/borabora.jpg";
import BoraBora2 from "../../assets/images/borabora2.jpg";
import Maldives from "../../assets/images/maldives.jpg";
import Maldives2 from "../../assets/images/maldives2.jpg";
import KeyWest from "../../assets/images/keywest.jpg";

const Destinations = () => {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={BoraBora} alt="/" />
          <img src={BoraBora2} alt="/" />
          <img src={Maldives} alt="/" />
          <img src={Maldives2} alt="/" />
          <img src={KeyWest} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
