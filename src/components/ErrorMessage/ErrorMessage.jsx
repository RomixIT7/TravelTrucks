import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error, width }) => {
  return (
    <p className={css.errorMessage} style={{ width: `${width}px` }}>
      {error?.status === 404
        ? "Nothing found"
        : "Something went wrong! Try again later."}
    </p>
  );
};

export default ErrorMessage;
