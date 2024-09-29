import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";

import { fetchCamperById } from "../../redux/campers/operation.js";
import { selectError, selectLoading } from "../../redux/global/selectors.js";
import { selectCamper } from "../../redux/campers/selectors.js";

import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!error && !loading && camper && (
        <div className={css.camperDetailsPageWrapper}>
          {camper && <CamperDetails camper={camper} />}
        </div>
      )}
    </>
  );
};

export default CamperDetailsPage;
