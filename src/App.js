import MyCarousel from "./components/carousel/MyCarousel";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <MyCarousel />
      <Footer />
    </div>
  );
};

export default App;
