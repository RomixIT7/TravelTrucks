import { Field, Form, Formik } from "formik";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import css from "./CamperForm.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const CamperForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <p className={css.formTitle}>Book your campervan now</p>
      <p className={css.formSubTitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className={css.inputsWrapper}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            ></Field>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            ></Field>
            {/* <Field
              className={css.input}
              type="text"
              name="date"
              placeholder="Booking date*"
            ></Field> */}
            <Flatpickr
              className={css.input}
              type="text"
              name="date"
              placeholder="Booking date*"
            />
            <Field
              className={`${css.textArea} ${css.input}`}
              as="textarea"
              name="comment"
              placeholder="Comment"
            ></Field>
          </div>
          <button className={css.formBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperForm;
