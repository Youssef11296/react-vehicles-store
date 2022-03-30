// modules
import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { MEDIA_QUERIES } from "../../constants";
import useWindowSize from "../../hooks/useWindowSize";
import ProductCard from "./Catalog/ProductCard";

const SavedList = () => {
  // selectors
  const savedList = useSelector((state) => state.main.savedList);

  // window size
  const windowSize = useWindowSize();

  return (
    <div
      className={`saved-list container ${
        windowSize.width < MEDIA_QUERIES.MD ? "responsive-md" : null
      }`}
    >
      <h2>Saved List</h2>
      {savedList.length === 0 ? (
        <p>
          It seems that your saved list is exmpty, please, get back and save
          which you love.
        </p>
      ) : (
        <Row gutter={16}>
          {savedList.map((vehicle) => (
            <Col className="gutter-row" span={6} xs={24} xl={8}>
              <ProductCard key={vehicle.id} vehicle={vehicle} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default SavedList;
