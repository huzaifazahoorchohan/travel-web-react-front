import "./Hero.css";
import VideoBG from "../../assets/videos/bg_video.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={VideoBG} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className="hero-form">
          <div>
            <input type="text" placeholder="Search destinations" />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
