// modules
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MEDIA_QUERIES } from "../constants";
import useWindowSize from "../hooks/useWindowSize";
// children
import { Catalog } from "../components/HomeComponents";
import SavedList from "../components/HomeComponents/SavedList";
// styles
import "../styles/PagesStyles/HomeStyles/index.scss";

const HomePage = () => {
  // local constants
  const HOME_SCREENS = { CATALOG: "CATALOG", SAVED: "SAVED" };
  // local states
  const [screen, setScreen] = useState(HOME_SCREENS.CATALOG);

  // screen nav handler
  const screenNavHandler = (screen) => {
    setScreen(screen);
  };

  // window size
  const windowSize = useWindowSize();

  return (
    <section
      className={`home container ${
        windowSize.width < MEDIA_QUERIES.MD ? "responsive-md" : null
      }`}
    >
      <Catalog />
    </section>
  );
};

export default HomePage;
