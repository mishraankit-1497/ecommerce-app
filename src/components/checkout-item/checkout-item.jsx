import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  clearItem,
  removeItem,
} from "../../features/cart/cartSlice";
import { Col, Row, Typography, Space } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import "./checkout-item.scss";

const { Text } = Typography;

const CheckoutItem = ({ item, addItemToCart, clearItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item">
      <Row align="middle" gutter={16}>
        <Col span={4}>
          <img src={imageUrl} alt="item" className="item-image" />
        </Col>

        <Col span={5}>
          <Text strong>{name}</Text>
        </Col>

        <Col span={5}>
          <Space size="middle">
            <span className="cursor-pointer" onClick={() => clearItem(item)}>
              <MinusOutlined />
            </span>

            <Text>{quantity}</Text>

            <span
              className="cursor-pointer"
              onClick={() => addItemToCart(item)}
            >
              {" "}
              <PlusOutlined />
            </span>
          </Space>
        </Col>

        <Col span={5}>
          <Text>${price}</Text>
        </Col>

        <Col span={5} style={{ textAlign: "center" }}>
          <span className="cursor-pointer" onClick={() => removeItem(item)}>
            <DeleteOutlined style={{ color: "red", fontSize: "20px" }} />
          </span>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
