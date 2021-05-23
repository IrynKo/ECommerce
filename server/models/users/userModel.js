const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
//const User = require("./userSchema");
const {
  findUserByEmail,
  addUser,
  updateToken,
} = require("../../servises/userSrv");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const reg = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        data: "Conflict",
        message: "Email in use",
      });
    }
    const newUser = await addUser({ ...req.body });
    return res.status(201).json({
      status: "success",
      data: {
        user: {
          email: newUser.email,
          //userId: newUser.id,
          username: newUser.username,
        },
      },
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await findUserByEmail(email);
    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({
        status: "error",
        code: 401,
        data: "Unauthorized",
        message: "Email or password is wrong",
      });
    }
    const id = user._id;
    const payload = { id };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
    await updateToken(id, token);
    user.save();
    console.log("loginuser", user);
    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        token,
        user,
      },
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    const id = req.user.id;
    console.log("req", req.user);
    await updateToken(id, null);

    return res.status(204).json({
      status: "Successful operation",
      code: 204,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  reg,
  login,
  logout,
};
