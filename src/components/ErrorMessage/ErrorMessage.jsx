import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ width }) => {
  return (
    <p className={css.errorMessage} style={{ width: `${width}px` }}>
      Something went wrong! Try again later.
    </p>
  );
};

export default ErrorMessage;
