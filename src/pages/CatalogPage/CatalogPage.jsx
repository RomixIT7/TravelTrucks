import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <div className={`container ${css.catalogPageWrapper}`}>
        <aside className={css.aside}>
          <Filters />
        </aside>
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
