import "./style.scss";
import {
  faDollar,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import InputWithIcon from "../../components/InputWithIcon";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="home">
      <header className="home__header">
        <h1 className="header__title">Smart Ways To Find Your Home</h1>
        <form className="header__form">
          <div className="search-types">
            <label htmlFor="buy" className="search-type">
              <input type="radio" id="buy" name="search-type" value={"buy"} />
              BUY
            </label>
            <label htmlFor="rent" className="search-type">
              <input type="radio" id="rent" name="search-type" value={"rent"} />
              RENT
            </label>
          </div>
          <div className="search-container">
            <InputWithIcon
              type="text"
              placeholder="Search Property"
              icon={faHome}
            />
            <InputWithIcon
              type="text"
              placeholder="Location"
              icon={faLocationDot}
            />
            <InputWithIcon
              type="number"
              placeholder="$100000-$500000"
              icon={faDollar}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </form>
      </header>
    </main>
  );
};

export default Home;
