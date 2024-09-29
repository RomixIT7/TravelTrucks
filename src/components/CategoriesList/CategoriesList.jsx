import css from "./CategoriesList.module.css";

const CategoriesList = ({ camper }) => {
  return (
    <ul className={css.categoriesList}>
      <li className={css.categoriesItem}>
        <svg className={css.icon} width="20" height="20">
          <use href="/symbol-defs.svg#icon-diagram"></use>
        </svg>
        <p>{camper.transmission}</p>
      </li>
      <li className={css.categoriesItem}>
        <svg className={css.icon} width="20" height="20">
          <use href="/symbol-defs.svg#icon-fuel-pump"></use>
        </svg>
        <p>{camper.engine}</p>
      </li>
      {camper.kitchen && (
        <li className={css.categoriesItem}>
          <svg className={css.icon} width="20" height="20">
            <use href="/symbol-defs.svg#icon-cup-hot"></use>
          </svg>
          <p>Kitchen</p>
        </li>
      )}
      {camper.AC && (
        <li className={css.categoriesItem}>
          <svg className={css.icon} width="20" height="20">
            <use href="/symbol-defs.svg#icon-wind"></use>
          </svg>
          <p>AC</p>
        </li>
      )}
      {camper.radio && (
        <li className={css.categoriesItem}>
          <svg className={css.icon} width="20" height="20">
            <use href="/symbol-defs.svg#icon-radio"></use>
          </svg>
          <p>Radio</p>
        </li>
      )}
      {camper.bathroom && (
        <li className={css.categoriesItem}>
          <svg className={css.icon} width="20" height="20">
            <use href="/symbol-defs.svg#icon-droplet"></use>
          </svg>
          <p>Bathroom</p>
        </li>
      )}
      {camper.TV && (
        <li className={css.categoriesItem}>
          <svg className={css.icon} width="20" height="20">
            <use href="/symbol-defs.svg#icon-tv"></use>
          </svg>
          <p>TV</p>
        </li>
      )}
    </ul>
  );
};

export default CategoriesList;
