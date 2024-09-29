import CategoriesList from "../CategoriesList/CategoriesList.jsx";

import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  return (
    <div className={css.featuresWrapper}>
      <CategoriesList camper={camper} />

      <div>
        <p className={css.vehicleDetailsTitle}>Vehicle details</p>
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsListItem}>
            Form <span>{camper.form}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            Length <span>{camper.length}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            Width <span>{camper.width}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            Height <span>{camper.height}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            Tank <span>{camper.tank}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            Consumption <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
