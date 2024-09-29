import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.background}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.subTitle}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog" className={css.link}>
        View Now
      </Link>
    </section>
  );
};

export default HomePage;
