// modules & hooks
import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
// assets
import LogoImg from "../assets/logoo.jpg";
// antd
import { Button, Col, Row } from "antd";
import { Select } from "antd";
// styles
import "../styles/WidgetsStyles/Controller.scss";

// theme options
import {
  MEDIA_QUERIES,
  THEME_OPTIONS,
  VEHICLE_BRANDS,
  VEHICLE_MODELS,
  VEHICLE_TYPES,
} from "../constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DownOutlined, HomeOutlined, UpOutlined } from "@ant-design/icons";
import { setFavs } from "../context/actions";

const Controller = () => {
  // local constants
  const SIDEBAR_SECTIONS = {
    THEME: "THEME",
    TYPE: "TYPE",
    MODEL: "MODEL",
    BRAND: "BRAND",
  };

  // dispatcher
  const dispatcher = useDispatch();

  // selectors
  const isDefaultTheme =
    useSelector((state) => state.shared.ui.theme) === THEME_OPTIONS.DEFAULT;
  const isSecondaryTheme =
    useSelector((state) => state.shared.ui.theme) === THEME_OPTIONS.SECONDARY;
  const isRecommendedTheme =
    useSelector((state) => state.shared.ui.theme) === THEME_OPTIONS.RECOMMENDED;
  const isDarkTheme =
    useSelector((state) => state.shared.ui.theme) === THEME_OPTIONS.DARK;

  const currentNav = useSelector((state) => state.shared.nav.currentNav);

  // select theme handler
  // const selectThemeHandler = (theme) => {
  //   dispatcher(setTheme(theme));
  // };

  const { Option } = Select;

  // selectors
  const favs = useSelector((state) => state.main.favs);

  function handleBrandChange(value) {
    console.log(`selected ${value}`);

    dispatcher(setFavs({ ...favs, brand: value }));
  }

  function handleTypeChange(value) {
    console.log(`selected ${value}`);

    dispatcher(setFavs({ ...favs, type: value }));
  }
  function handleModelChange(value) {
    console.log(`selected ${value}`);

    dispatcher(setFavs({ ...favs, model: value }));
  }

  console.log({ favs });

  // window size
  const windowSize = useWindowSize();

  return (
    <div className="controller">
      <Row gutter={16}>
        {/* <h1>Controller</h1> */}
        <Col className="gutter-row" span={6} xs={24} xl={18}>
          <div className="">
            <Row gutter={16}>
              <Col className="gutter-row" span={6} xs={24} xl={8}>
                <div className="vehicle-type">
                  <Select
                    defaultValue={VEHICLE_TYPES.CAR}
                    style={{ width: 120 }}
                    onChange={handleTypeChange}
                  >
                    <Option value="Car">Car</Option>
                    <Option value="Bycle">Bycle</Option>
                  </Select>
                </div>
              </Col>

              <Col className="gutter-row" span={6} xs={24} xl={8}>
                <div className="model-year">
                  <Select
                    defaultValue={VEHICLE_MODELS.MODERN}
                    style={{ width: 120 }}
                    onChange={handleModelChange}
                  >
                    <Option value={VEHICLE_MODELS.MODERN}>
                      {VEHICLE_MODELS.MODERN}
                    </Option>
                    <Option value={VEHICLE_MODELS.OLD}>
                      {VEHICLE_MODELS.VERY_OLD}
                    </Option>
                    <Option value={VEHICLE_MODELS.LAST}>
                      {VEHICLE_MODELS.LAST}
                    </Option>
                  </Select>
                </div>
              </Col>

              <Col className="gutter-row" span={6} xs={24} xl={8}>
                <div className="model-brand">
                  <Select
                    defaultValue={VEHICLE_BRANDS.BMW}
                    style={{ width: 120 }}
                    onChange={handleBrandChange}
                  >
                    <Option value={VEHICLE_BRANDS.BMW}>
                      {VEHICLE_BRANDS.BMW}
                    </Option>
                    <Option value={VEHICLE_BRANDS.FERARI}>
                      {VEHICLE_BRANDS.FERARI}
                    </Option>
                    <Option value={VEHICLE_BRANDS.LANCER}>
                      {VEHICLE_BRANDS.LANCER}
                    </Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={6} xs={24} xl={6}>
          <Button>Apply Filter</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Controller;
