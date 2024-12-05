import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrderAsyncThunk } from "../../features/order/orderSlice";
import OrderCard from "../../components/order-card/order-card";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.order);
  const userId = localStorage.getItem("userId" || "");
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserOrderAsyncThunk(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-white font-bold">Your orders</h2>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && orders.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[80%] text-center">
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded shadow-md max-w-md">
            <h3 className="font-semibold text-lg">No Orders Found</h3>
            <p className="text-gray-600 mt-2">
              You haven’t placed any orders yet. Start shopping to see them here!
            </p>
          </div>
        </div>
      )}

      {!loading && orders.length > 0 && (
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
