import React from "react";
import { connect, useDispatch } from "react-redux";
import { Row, Col, Typography, Divider } from "antd";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./checkout.scss";
import { createOrderAsyncThunk } from "../../features/order/orderSlice";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlice";

const { Title, Text } = Typography;

const Checkout = ({ cartItems, totalPrice }) => {
  const userId = localStorage.getItem("userId" || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const orderDetails = {
        userId: userId,
        transactionId: details?.id,
        transactionTime: details?.create_time,
        status: details?.status,
        transactionAmount: details?.purchase_units[0]?.amount?.value,
        currencyCode: details?.purchase_units[0]?.amount?.currency_code,
        payerName: details?.payer?.name?.given_name,
        payerEmail: details?.payer?.email_address,
        payerId: details?.payer?.payer_id,
        orderedItems: cartItems?.map((cartItem) => ({
          productId: cartItem._id,
          price: cartItem?.price,
          quantity: cartItem?.quantity,
        })),
      };
      dispatch(createOrderAsyncThunk(orderDetails)).then(() => {
        navigate('/orders')
        dispatch(clearCart())
      });
    });
  };

  return (
    <div className="checkout-page">
      <Row gutter={[16, 24]}>
        <Col span={24} lg={18}>
          <div className="checkout-items">
            {!cartItems.length ? (
              <Title
                level={2}
                className=""
                style={{ color: "#fff", textAlign: "center" }}
              >
                Your cart is empty
              </Title>
            ) : (
              cartItems.map((item, idx) => (
                <CheckoutItem key={idx} item={item} />
              ))
            )}
          </div>
        </Col>

        <Col span={24} lg={6}>
          <div className="payment-info">
            <Title level={4} style={{ textAlign: "center", margin: 0 }}>
              Checkout
            </Title>
            <Divider />
            <Title level={4}>Total: ${totalPrice}</Title>
            {userId ? (
              <div className="paypal-button">
                <PayPalButtons
                  style={{ layout: "horizontal" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              </div>
            ) : (
              <Link to="/auth">Click here to Login</Link>
            )}

            <div className="test-warning">
              <Text type="danger" italic>
                *** Please use the following test credit card for the payments:
              </Text>
              <Text>4137 3503 0339 4222 - Exp: 05/25 - CVV:444</Text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
  totalPrice: cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps, null)(Checkout);
