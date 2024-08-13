// const Admin = require("../models/UserDeatiils");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "keshanabatman";

// // Middleware for verifying JWT tokens
// const authenticateToken = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).json({ error: "Access Denied" });

//   try {
//     const verified = jwt.verify(token, JWT_SECRET);
//     req.user = verified; // Store the verified token payload in req.user
//     next();
//   } catch (error) {
//     res.status(400).json({ error: "Invalid Token" });
//   }
// };

// // Fetch all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await Admin.find({});
//     res.json({ status: "ok", data: users });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Add a new user
// const adduser = async (req, res) => {
//   const { UserName, Busname, Phone, BusNumber, To, where, arrival, departure, Nextarrival, Nextdeparture, password } = req.body;

//   if (!UserName || !Busname || !Phone || !BusNumber || !password) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const oldUser = await Admin.findOne({ BusNumber });
//   if (oldUser) {
//     return res.status(400).json({ error: "User already exists" });
//   }

//   try {
//     const encprtyPw = await bcrypt.hash(password, 10);
//     await Admin.create({
//       UserName,
//       Busname,
//       Phone,
//       BusNumber,
//       To,
//       where,
//       arrival,
//       departure,
//       Nextarrival,
//       Nextdeparture,
//       password: encprtyPw,
//     });
//     res.json({ status: "ok", data: "User created" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Login a user
// const loginuser = async (req, res) => {
//   const { BusNumber, password } = req.body;

//   if (!BusNumber || !password) {
//     return res.status(400).json({ error: "BusNumber and password are required" });
//   }

//   const user = await Admin.findOne({ BusNumber });
//   if (!user) {
//     return res.status(400).json({ error: "User does not exist" });
//   }

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     return res.status(400).json({ error: "Invalid credentials" });
//   }

//   const token = jwt.sign({ BusNumber: user.BusNumber }, JWT_SECRET);
//   res.json({ status: "ok", data: token });
// };

// // Fetch user data
// const userData = async (req, res) => {
//   const { token } = req.body;

//   if (!token) {
//     return res.status(400).json({ error: "Token is required" });
//   }

//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     const userBusNumber = user.BusNumber;

//     const data = await Admin.findOne({ BusNumber: userBusNumber });
//     res.json({ status: "ok", data });
//   } catch (error) {
//     res.status(400).json({ error: "Invalid token" });
//   }
// };

// // Logout a user
// const logout = async (req, res) => {
//   // Implement token blacklist logic here if needed
//   res.json({ status: "ok", data: "User logged out" });
// };

// // Delete a user
// const deleteUser = async (req, res) => {
//   const { token } = req.body;

//   if (!token) {
//     return res.status(400).json({ error: "Token is required" });
//   }

//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     const userBusNumber = user.BusNumber;

//     await Admin.deleteOne({ BusNumber: userBusNumber });
//     res.json({ status: "ok", data: "User deleted" });
//   } catch (error) {
//     res.status(400).json({ error: "Invalid token" });
//   }
// };

// module.exports = {
//   adduser,
//   loginuser,
//   userData,
//   deleteUser,
//   logout,
//   getAllUsers,
// };



const Admin = require("../models/UserDeatiils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "keshanabatman";

// Middleware for verifying JWT tokens
const authenticateToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Store the verified token payload in req.user
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Admin.find({});
    res.json({ status: "ok", data: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a new user
const adduser = async (req, res) => {
  const { UserName, Busname, Phone, BusNumber, To, Where, arrival, departure, Nextarrival, Nextdeparture, password } = req.body;

  if (!UserName || !Busname || !Phone || !BusNumber || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const oldUser = await Admin.findOne({ BusNumber });
  if (oldUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const encprtyPw = await bcrypt.hash(password, 10);
    await Admin.create({
      UserName,
      Busname,
      Phone,
      BusNumber,
      To,
      Where,
      arrival,
      departure,
      Nextarrival,
      Nextdeparture,
      password: encprtyPw,
    });
    res.json({ status: "ok", data: "User created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login a user
const loginuser = async (req, res) => {
  const { BusNumber, password } = req.body;

  if (!BusNumber || !password) {
    return res.status(400).json({ error: "BusNumber and password are required" });
  }

  const user = await Admin.findOne({ BusNumber });
  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ BusNumber: user.BusNumber }, JWT_SECRET);
  res.json({ status: "ok", data: token });
};

// Fetch user data
const userData = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userBusNumber = user.BusNumber;

    const data = await Admin.findOne({ BusNumber: userBusNumber });
    res.json({ status: "ok", data });
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

// Logout a user
const logout = async (req, res) => {
  // Implement token blacklist logic here if needed
  res.json({ status: "ok", data: "User logged out" });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userBusNumber = user.BusNumber;

    await Admin.deleteOne({ BusNumber: userBusNumber });
    res.json({ status: "ok", data: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = {
  adduser,
  loginuser,
  userData,
  deleteUser,
  logout,
  getAllUsers,
};
