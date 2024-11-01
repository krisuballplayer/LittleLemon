import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum velit optio ipsa
            perspiciatis quis porro, atque odit ad quae sit, facilis saepe itaque asperiores
            repellendus dolore et at, sint architecto?
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
