import "./Search.css";
import Gold from "../../assets/images/gold.png";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURAY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Sandals Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and PADI® certified
            scuba diving at most resorts. If you are planning a wedding, Sandals
            is the leader in Caribbean destination weddings and honeymoon
            packages.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Search;
