import Camper from "../Camper/Camper.jsx";

import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = [
    {
      id: "1",
      name: "Road Bear C 23-25",
      price: 10000,
      rating: 4.5,
      location: "Ukraine, Kyiv",
      description:
        "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
      form: "alcove",
      length: "7.3m",
      width: "2.65m",
      height: "3.65m",
      tank: "208l",
      consumption: "30l/100km",
      transmission: "automatic",
      engine: "diesel",
      AC: true,
      bathroom: true,
      kitchen: false,
      TV: true,
      radio: true,
      refrigerator: false,
      microwave: true,
      gas: false,
      water: true,
      gallery: [
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
          original: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
          original: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/1-3.webp",
          original: "https://ftp.goit.study/img/campers-test-task/1-3.webp",
        },
      ],
      reviews: [
        {
          reviewer_name: "Alice",
          reviewer_rating: 5,
          comment:
            "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!",
        },
        {
          reviewer_name: "Bob",
          reviewer_rating: 4,
          comment:
            "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.",
        },
      ],
    },
    {
      id: "2",
      name: "Cruise America C-21",
      price: 8000,
      rating: 4.3,
      location: "Ukraine, Poltava",
      description:
        "Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.",
      form: "alcove",
      length: "6.4m",
      width: "2.34m",
      height: "3.72m",
      tank: "151l",
      consumption: "21l/100km",
      transmission: "automatic",
      engine: "petrol",
      AC: true,
      bathroom: true,
      kitchen: true,
      TV: false,
      radio: true,
      refrigerator: true,
      microwave: true,
      gas: true,
      water: true,
      gallery: [
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/2-1.webp",
          original: "https://ftp.goit.study/img/campers-test-task/2-1.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/2-2.webp",
          original: "https://ftp.goit.study/img/campers-test-task/2-2.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/2-3.webp",
          original: "https://ftp.goit.study/img/campers-test-task/2-3.webp",
        },
      ],
      reviews: [
        {
          reviewer_name: "Alice",
          reviewer_rating: 5,
          comment:
            "The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip.",
        },
        {
          reviewer_name: "Bob",
          reviewer_rating: 3,
          comment:
            "Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip.",
        },
      ],
    },
    {
      id: "11",
      name: "Kuga Camper",
      price: 8500,
      rating: 4.4,
      location: "Ukraine, Kyiv",
      description:
        "Embark on a comfortable and convenient road trip with the Kuga Camper panel truck. Designed for small groups or couples, this compact camper offers a blend of functionality and style. Explore the open roads with ease, enjoy the convenience of on-the-go cooking, and experience the freedom of a camper designed for memorable adventures.",
      form: "panelTruck",
      length: "5.6m",
      width: "2m",
      height: "3.1m",
      tank: "117l",
      consumption: "15l/100km",
      transmission: "automatic",
      engine: "diesel",
      AC: true,
      bathroom: false,
      kitchen: true,
      TV: false,
      radio: true,
      refrigerator: false,
      microwave: true,
      gas: true,
      water: false,
      gallery: [
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/11-1.webp",
          original: "https://ftp.goit.study/img/campers-test-task/11-1.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/11-2.webp",
          original: "https://ftp.goit.study/img/campers-test-task/11-2.webp",
        },
        {
          thumb: "https://ftp.goit.study/img/campers-test-task/11-3.webp",
          original: "https://ftp.goit.study/img/campers-test-task/11-3.webp",
        },
      ],
      reviews: [
        {
          reviewer_name: "Alice",
          reviewer_rating: 5,
          comment:
            "The Kuga Camper exceeded our expectations! Compact yet spacious enough for a small group, it provided all the necessary amenities for a comfortable journey. The kitchen facilities were a definite plus, making our road trip enjoyable.",
        },
        {
          reviewer_name: "Bob",
          reviewer_rating: 3,
          comment:
            "A decent option for a small group or couple. The Kuga Camper offered convenience, but the lack of a TV was a downside for entertainment. Overall, a comfortable camper for short trips.",
        },
      ],
    },
  ];

  return (
    <>
      <ul className={css.campersList}>
        {Array.isArray(campers) &&
          campers.map((camper) => {
            return <Camper key={camper.id} camper={camper} />;
          })}
      </ul>
    </>
  );
};

export default CampersList;
