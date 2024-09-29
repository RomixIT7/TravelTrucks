import clsx from "clsx";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

import CamperForm from "../CamperForm/CamperForm.jsx";

import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";

import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const camperDetailsListLinkActive = ({ isActive }) =>
    clsx(css.camperDetailsListLink, { [css.active]: isActive });

  return (
    <>
      <p className={css.camperNameAndPrice}>{camper.name}</p>
      <div className={css.camperRatingAndLocationWrapper}>
        <div className={css.camperRatingWrapper}>
          <img src="/public/yellow-star.png" width="16" height="16" />
          <p className={css.camperRating}>
            {camper.rating} ({camper.reviews?.length} Reviews)
          </p>
        </div>
        <div className={css.camperRatingWrapper}>
          <svg className={css.icon} width="16" height="16">
            <use href="/public/symbol-defs.svg#icon-map"></use>
          </svg>
          <p>{camper.location}</p>
        </div>
      </div>
      <p className={css.camperNameAndPrice}>€{camper.price}.00</p>
      <div className={css.camperGallery}>
        <img
          className={css.camperImg}
          src={Array.isArray(camper.gallery) && camper.gallery[0]?.original}
          alt={camper.description}
        />
        <img
          className={css.camperImg}
          src={Array.isArray(camper.gallery) && camper.gallery[1]?.original}
          alt={camper.description}
        />
        <img
          className={css.camperImg}
          src={Array.isArray(camper.gallery) && camper.gallery[2]?.original}
          alt={camper.description}
        />
      </div>
      <p className={css.camperDescription}>{camper.description}</p>
      <ul className={css.camperDetailsList}>
        <li>
          <NavLink className={camperDetailsListLinkActive} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={camperDetailsListLinkActive} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.camperAdditionalDetailsWrapper}>
        <Routes>
          <Route path="/" element={<Navigate to="features" replace />}></Route>
          <Route
            path="features"
            element={<CamperFeatures camper={camper} />}
          ></Route>
          <Route
            path="reviews"
            element={<CamperReviews camper={camper} />}
          ></Route>
        </Routes>
        <CamperForm />
      </div>
    </>
  );
};

export default CamperDetails;
