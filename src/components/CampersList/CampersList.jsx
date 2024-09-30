import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Camper from "../Camper/Camper.jsx";

import { selectCampers } from "../../redux/campers/selectors.js";
import { selectError, selectLoading } from "../../redux/global/selectors.js";
import { fetchCampers } from "../../redux/campers/operation.js";
import { selectFavorites } from "../../redux/favorite/selectors.js";

import css from "./CampersList.module.css";

const CampersList = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const favoriteCampersIdArray = useSelector(selectFavorites);

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const favoriteCampers = campers?.filter((camper) =>
    favoriteCampersIdArray?.includes(camper.id)
  );

  const allOrFavoriteCampers =
    pathname === "/catalog" ? campers : favoriteCampers;

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} width={888} />}
      {!error && !loading && allOrFavoriteCampers && (
        <ul className={css.campersList}>
          {Array.isArray(allOrFavoriteCampers) &&
            allOrFavoriteCampers.map((camper) => {
              return <Camper key={camper.id} camper={camper} />;
            })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
