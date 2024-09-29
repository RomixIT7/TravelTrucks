import css from "./Location.module.css";

const Location = () => {
  return (
    <label className={css.label}>
      Location{" "}
      <div className={css.inputWrapper}>
        <input className={css.input} type="text" placeholder="City" />
        <svg className={css.icon} width="20" height="20">
          <use href="/public/symbol-defs.svg#icon-map"></use>
        </svg>
      </div>
    </label>
  );
};

export default Location;
