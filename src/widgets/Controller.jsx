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

const Controller = () => {
  // local states
  const [favs, setFavs] = useState({
    ui: {
      theme: THEME_OPTIONS.DEFAULT,
    },
    options: {
      vehicleType: VEHICLE_TYPES.CAR,
      vehicleModel: VEHICLE_MODELS.VERY_OLD,
      vehicleBrand: VEHICLE_BRANDS.BMW,
    },
  });

  const [isExpanded, setIsExpanded] = useState({
    theme: false,
    type: false,
    model: false,
    brand: false,
  });

  // local constants
  const SIDEBAR_SECTIONS = {
    THEME: "THEME",
    TYPE: "TYPE",
    MODEL: "MODEL",
    BRAND: "BRAND",
  };

  // set favs handlers
  const setThemeHandler = (theme) => {
    setFavs({ ...favs, ui: { theme } });
  };

  const setTypeHandler = (type) => {
    setFavs({ ...favs, options: { ...favs.options, type } });
  };

  const setModelHandler = (model) => {
    setFavs({ ...favs, options: { ...favs.options, model } });
  };

  const setBrandHandler = (brand) => {
    setFavs({ ...favs, options: { ...favs.options, brand } });
  };

  // expanding handler
  const expandHandler = (sectionName) => {
    switch (sectionName) {
      case SIDEBAR_SECTIONS.THEME:
        return setIsExpanded({ ...isExpanded, theme: !isExpanded.theme });
      case SIDEBAR_SECTIONS.TYPE:
        return setIsExpanded({ ...isExpanded, type: !isExpanded.type });
      case SIDEBAR_SECTIONS.MODEL:
        return setIsExpanded({ ...isExpanded, model: !isExpanded.model });
      case SIDEBAR_SECTIONS.BRAND:
        return setIsExpanded({ ...isExpanded, brand: !isExpanded.brand });
      default:
        return { ...isExpanded };
    }
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </Col>

              <Col className="gutter-row" span={6} xs={24} xl={8}>
                <div className="model-year">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </Col>

              <Col className="gutter-row" span={6} xs={24} xl={8}>
                <div className="model-brand">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
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
