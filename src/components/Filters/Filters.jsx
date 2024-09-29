import css from "./Filters.module.css";

const Filters = () => {
  return (
    <>
      <p className={css.filters}>Filters</p>

      <p className={css.vehicleCharacteristics}>Vehicle equipment</p>
      <ul className={css.vehicleCharacteristicsList}>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-wind"></use>
            </svg>
            AC
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-diagram"></use>
            </svg>
            Automatic
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-cup-hot"></use>
            </svg>
            Kitchen
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-tv"></use>
            </svg>
            TV
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-droplet"></use>
            </svg>
            Bathroom
          </button>
        </li>
      </ul>

      <p className={css.vehicleCharacteristics}>Vehicle type</p>
      <ul className={css.vehicleCharacteristicsList}>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-bi_grid-1x2"></use>
            </svg>
            Van
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-bi_grid"></use>
            </svg>
            Fully Integrated
          </button>
        </li>
        <li>
          <button className={css.btn}>
            <svg className={css.icon} width="32" height="32">
              <use href="/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
            </svg>
            Alcove
          </button>
        </li>
      </ul>

      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </>
  );
};

export default Filters;
