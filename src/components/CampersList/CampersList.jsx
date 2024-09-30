import { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);

  const perPage = 4;

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

  const totalPages = Math.ceil(campers?.length / perPage);

  const getCurrentPageData = () => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return campers?.slice(0, end);
  };

  const handleClick = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const allOrFavoriteCampers =
    pathname === "/catalog" ? getCurrentPageData() : favoriteCampers;

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} width={888} />}
      {!error && !loading && allOrFavoriteCampers && (
        <div>
          <ul className={css.campersList}>
            {Array.isArray(allOrFavoriteCampers) &&
              allOrFavoriteCampers.map((camper) => {
                return <Camper key={camper.id} camper={camper} />;
              })}
          </ul>
          {pathname === "/catalog" && page < totalPages && (
            <button className={css.loadMoreBtn} onClick={handleClick}>
              Load more
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CampersList;
