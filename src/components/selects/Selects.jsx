import "./Selects.css";
import BoraBora from "../../assets/images/borabora.jpg";
import BoraBora2 from "../../assets/images/borabora2.jpg";
import Maldives from "../../assets/images/maldives.jpg";
import Maldives2 from "../../assets/images/maldives2.jpg";
import KeyWest from "../../assets/images/keywest.jpg";
import Maldives3 from "../../assets/images/maldives3.jpg";

import SelectImg from "../selectImg/SelectImg";

const Selects = () => {
  return (
    <div name="book" className="selects">
      <div className="container">
        <SelectImg bg={BoraBora} text="Borabora" />
        <SelectImg bg={BoraBora2} text="Borabora2" />
        <SelectImg bg={Maldives} text="Maldives" />
        <SelectImg bg={Maldives2} text="Maldives2" />
        <SelectImg bg={Maldives3} text="Maldives3" />
        <SelectImg bg={KeyWest} text="KeyWest" />
      </div>
    </div>
  );
};

export default Selects;
