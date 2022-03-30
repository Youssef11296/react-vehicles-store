// modules & hooks
import React from "react";
// children
import ProductCard from "./ProductCard";
// antd
import { Select } from "antd";
import { Row, Col, AutoComplete, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
// data
import data from "../../../utils/data.json";

const Catalog = () => {
  // antd utils
  const { Option } = Select;
  // antd select handler
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  // antd autocomplete utils
  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{ float: "right" }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );

  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle("Libraries"),
      options: [
        renderItem("AntDesign", 10000),
        renderItem("AntDesign UI", 10600),
      ],
    },
    {
      label: renderTitle("Solutions"),
      options: [
        renderItem("AntDesign UI FAQ", 60100),
        renderItem("AntDesign FAQ", 30010),
      ],
    },
    {
      label: renderTitle("Articles"),
      options: [renderItem("AntDesign design language", 100000)],
    },
  ];

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <div className="catalog-content">
        <Row gutter={16}>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <div className="catalog-search">
              <Form>
                <AutoComplete
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={500}
                  style={{ width: 250 }}
                  options={options}
                >
                  <Input.Search size="large" placeholder="input here" />
                </AutoComplete>
              </Form>
            </div>
          </Col>
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <div className="filter">
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
      <Row gutter={16}>
        {data.cars.map((car) => (
          <Col className="gutter-row" span={6} xs={24} xl={8}>
            <ProductCard key={car.id} vehicle={car} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Catalog;
