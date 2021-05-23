const mongodb = require("mongoose");
const { gerOrders, addAnOrder } = require("../../servises/ordersSrv");
const addOrder = async (req, res, next) => {
  try {
    const userID = req.user.id;
    const order = await addAnOrder(req.body, userID);
    if (order) {
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          order,
        },
      });
    } else {
      return next({
        status: 404,
        message: "Not found contact",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getOrders = async (req, res, next) => {
  try {
    const userID = req.user.id;
    const orders = await gerOrders(userID, req.query);
    if (orders) {
      res.status(201).json({
        status: "success",
        code: 201,
        data: [...orders],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addOrder,
  getOrders,
};
