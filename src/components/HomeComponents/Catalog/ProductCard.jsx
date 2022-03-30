// modules
import React from "react";
// antd
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { saveVehicle } from "../../../context/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const ProductCard = ({ vehicle }) => {
  // selectors
  const savedList = useSelector((state) => state.main.savedList);

  const [v, setV] = useState(vehicle);

  const isSavedItem = () => {
    console.log({ vehicle });
    if (savedList.find((product) => product.id === vehicle.id)) return true;
    return false;
  };
  useEffect(() => {
    isSavedItem();
  }, []);

  // dispatcher
  const dispatcher = useDispatch();

  // save product handler
  const saveProductHandler = (product) => {
    dispatcher(saveVehicle(product));
  };

  return (
    <div className={`product-card ${isSavedItem ? "saved-item" : null}`}>
      <img src={vehicle.img} alt="Some vehicle" />
      <div className="basic-info">
        <h4 className="vehicle-name">{vehicle.category}</h4>
        <div className="vehicle-model">
          <span>{vehicle.model}</span>
          <span>-</span>
          <span>{vehicle.brand}</span>
        </div>
      </div>
      <p className="vehicle-describtion">{vehicle.describtion}</p>
      <div className="vehicle-price">{vehicle.price}$</div>
      <div className="product-options">
        <HeartOutlined
          className="heart"
          onClick={() => saveProductHandler(vehicle)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
