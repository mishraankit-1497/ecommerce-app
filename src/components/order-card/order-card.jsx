import React from "react";

const OrderCard = ({ order }) => {
  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD", // Adjust for INR or USD
    }).format(amount);
  };

  // Calculate total for ordered items
  const calculateTotal = () => {
    return order.orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-lg font-bold">
            {order.payerName} <span className="text-sm text-gray-500">({order.transactionId})</span>
          </h4>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              order.status === "COMPLETED"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {order.status}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {new Date(order.transactionTime).toLocaleString()}
        </span>
      </div>

      {/* Ordered Items */}
      <div className="divide-y divide-gray-200">
        {order.orderedItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center py-2">
            <div className="flex items-center gap-4">
              <img
                src={item.productId.imageUrl}
                alt={item.productId.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{item.productId.name}</p>
                <p className="text-sm text-gray-500">{item.quantity} x {formatCurrency(item.price)}</p>
              </div>
            </div>
            <p className="text-sm font-medium">{formatCurrency(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-medium text-gray-700">Total Amount</p>
        <p className="font-semibold">{formatCurrency(calculateTotal())}</p>
      </div>

      {/* Transaction Amount */}
      <div className="flex justify-between items-center mt-2 border-t pt-4">
        <p className="font-bold text-gray-800">Transaction Amount</p>
        <p className="font-bold text-gray-800">{formatCurrency(order.transactionAmount)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
