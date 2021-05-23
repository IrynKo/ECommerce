const Order = require("../models/order/orderSchema");

const gerOrders = async (userId) => {
  const orders = await Order.find({ owner: userId }).populate({
    path: "owner",
    select: "email",
  });

  return orders;
};

const addAnOrder = async (body, userId) => {
  const order = await Order.create({ ...body, owner: userId });
  return order;
};

module.exports = {
  gerOrders,
  addAnOrder,
};
