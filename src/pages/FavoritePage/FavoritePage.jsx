import CampersList from "../../components/CampersList/CampersList.jsx";

import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  return (
    <div className={css.favoritePageWrapper}>
      <CampersList />
    </div>
  );
};

export default FavoritePage;
