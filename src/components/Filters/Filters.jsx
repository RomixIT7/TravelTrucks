import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { fetchCampers } from "../../redux/campers/operation.js";

import css from "./Filters.module.css";

const initialValues = {
  location: "",
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

const validationSchema = Yup.object().shape({
  location: Yup.string()
    .oneOf(
      ["Kyiv", "Poltava", "Dnipro", "Odesa", "Kharkiv", "Sumy", "Lviv"],
      "Location must be one of this: Kyiv, Poltava, Dnipro, Odesa, Kharkiv, Sumy, Lviv"
    )
    .trim(),
  AC: Yup.boolean(),
  transmission: Yup.boolean(),
  kitchen: Yup.boolean(),
  TV: Yup.boolean(),
  bathroom: Yup.boolean(),
  form: Yup.string().oneOf(["alcove", "fullyIntegrated", "panelTruck"]),
});

const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.transmission = values.transmission === true ? "automatic" : false;

    for (const key in values) {
      if (values[key] === initialValues[key]) {
        delete values[key];
      }
    }

    dispatch(fetchCampers(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label className={css.label}>
          Location{" "}
          <div className={css.inputWrapper}>
            <Field
              className={css.input}
              type="text"
              name="location"
              placeholder="City"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="location"
              component="span"
            />
            <svg className={css.iconMap} width="20" height="20">
              <use href="/symbol-defs.svg#icon-map"></use>
            </svg>
          </div>
        </label>

        <p className={css.filters}>Filters</p>

        <p className={css.vehicleCharacteristics}>Vehicle equipment</p>
        <ul className={css.vehicleCharacteristicsList}>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="AC"
              id="ac"
            ></Field>
            <label htmlFor="ac" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-wind"></use>
              </svg>
              AC
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="transmission"
              id="automatic"
            ></Field>
            <label htmlFor="automatic" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-diagram"></use>
              </svg>
              Automatic
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="kitchen"
              id="kitchen"
            ></Field>
            <label htmlFor="kitchen" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="TV"
              id="tv"
            ></Field>
            <label htmlFor="tv" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-tv"></use>
              </svg>
              TV
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="bathroom"
              id="bathroom"
            ></Field>
            <label htmlFor="bathroom" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-droplet"></use>
              </svg>
              Bathroom
            </label>
          </li>
        </ul>

        <p className={css.vehicleCharacteristics}>Vehicle type</p>
        <ul className={css.vehicleCharacteristicsList}>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="panelTruck"
              id="van"
            ></Field>
            <label htmlFor="van" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-bi_grid-1x2"></use>
              </svg>
              Van
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="fullyIntegrated"
              id="fullyIntegrated"
            ></Field>
            <label htmlFor="fullyIntegrated" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-bi_grid"></use>
              </svg>
              Fully Integrated
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="alcove"
              id="alcove"
            ></Field>
            <label htmlFor="alcove" className={css.btn}>
              <svg className={css.icon} width="32" height="32">
                <use href="/symbol-defs.svg#icon-bi_grid-3x3-gap"></use>
              </svg>
              Alcove
            </label>
          </li>
        </ul>

        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
