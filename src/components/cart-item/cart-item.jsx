import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./cart.item.scss";

const { Text } = Typography;

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <Card className="cart-item" hoverable style={{ marginBottom: "10px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <img src={imageUrl} alt="item" className="cart-item-img" />
      </Col>
      <Col span={16}>
        <div className="item-details">
          <Text strong className="name">
            {name}
          </Text>
          <Text className="price">
            {quantity} x ${price}
          </Text>
        </div>
      </Col>
    </Row>
  </Card>
);

export { CartItem };
