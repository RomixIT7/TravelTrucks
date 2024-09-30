import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Camper from "../Camper/Camper.jsx";

import { selectCampers } from "../../redux/campers/selectors.js";
import { selectError, selectLoading } from "../../redux/global/selectors.js";
import { fetchCampers } from "../../redux/campers/operation.js";

import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} width={888} />}
      {!error && !loading && campers && (
        <ul className={css.campersList}>
          {Array.isArray(campers) &&
            campers.map((camper) => {
              return <Camper key={camper.id} camper={camper} />;
            })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
