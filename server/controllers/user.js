// const Admin = require("../models/UserDeatiils");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "keshanabatman";



// // Define the middleware for verifying JWT tokens
// const authenticateToken = (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send({ error: "Access Denied" });

//   try {
//       const verified = jwt.verify(token, JWT_SECRET);
//       req.user = verified; // Store the verified token payload in req.user
//       next();
//   } catch (error) {
//       res.status(400).send({ error: "Invalid Token" });
//   }
// };


// const getAllUsers = async (req, res) => {
//     try {
//         const users = await Admin.find({});
//         res.send({ status: "ok", data: users });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// const adduser = async (req, res) => {
//   const { UserName, Busname, Phone, BusNumber, password } = req.body;

//   const oldUser = await Admin.findOne({ BusNumber: BusNumber });
//   if (oldUser) {
//     return res.send({ data: "user already exists" });
//   }

//   const encprtyPw = await bcrypt.hash(password, 10);
//   try {
//     await Admin.create({
//       UserName,
//       Busname,
//       Phone,
//       BusNumber,
//       password: encprtyPw,
//     });
//     res.send({ status: "ok", data: "user created" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const loginuser = async (req, res) => {
//   const { BusNumber, password } = req.body;
//   const Users = await Admin.findOne({ BusNumber: BusNumber });
//   if (!Users) {
//     return res.send({ data: "user doesn not exits" });
//   }
//   if (await bcrypt.compare(password, Users.password)) {
//     const token = jwt.sign({ BusNumber: Users.BusNumber }, JWT_SECRET);

//     if (res.status(201)) {
//       return res.send({ status: "ok", data: token });
//     } else {
//       return res.send({ error: "error" });
//     }
//   }
// };

// const userData = async (req, res) => {
//   const { token } = req.body;
//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     const userBusNumber = user.BusNumber;

//     Admin.findOne({ BusNumber: userBusNumber }).then((data) => {
//       return res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     return res.send({ error: "error" });
//   }
// };

// const logout = async (req, res) => {
//     const { token } = req.body;
//     // Optionally implement token blacklist logic here if needed.
//     return res.send({ status: "ok", data: "user logged out" });
// };

// const deleteUser = async (req, res) => {
//     const { token } = req.body;
//     try {
//         const user = jwt.verify(token, JWT_SECRET);
//         const userBusNumber = user.BusNumber;

//         await Admin.deleteOne({ BusNumber: userBusNumber });
//         return res.send({ status: "ok", data: "user deleted" });
//     } catch (error) {
//         return res.send({ error: "error" });
//     }
// };


// // Define the function to add a bus
// const addBus = async (req, res) => {
//   const { Busname, OwnerName, Phone, location, descripe } = req.body;

//   // Create a new bus entry
//   const newBus = new SpecailBus({
//     Busname,
//     OwnerName,
//     Phone,
//     location,
//     descripe,
//   });

//   try {
//     // Save the bus to the database
//     await newBus.save();
//     res.send({ status: "ok", data: "bus added" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



// module.exports = {
//   adduser,
//   loginuser,
//   userData,
//   deleteUser,
//   logout,
//   getAllUsers
// };


const Admin = require("../models/UserDeatiils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "keshanabatman";

// Define the middleware for verifying JWT tokens
const authenticateToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Store the verified token payload in req.user
    next();
  } catch (error) {
    res.status(400).send({ error: "Invalid Token" });
  }
};

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Admin.find({});
    res.send({ status: "ok", data: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a new user
const adduser = async (req, res) => {
  const { UserName, Busname, Phone, BusNumber, password } = req.body;

  const oldUser = await Admin.findOne({ BusNumber: BusNumber });
  if (oldUser) {
    return res.send({ data: "user already exists" });
  }

  const encprtyPw = await bcrypt.hash(password, 10);
  try {
    await Admin.create({
      UserName,
      Busname,
      Phone,
      BusNumber,
      password: encprtyPw,
    });
    res.send({ status: "ok", data: "user created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login a user
const loginuser = async (req, res) => {
  const { BusNumber, password } = req.body;
  const Users = await Admin.findOne({ BusNumber: BusNumber });
  if (!Users) {
    return res.send({ data: "user doesn not exits" });
  }
  if (await bcrypt.compare(password, Users.password)) {
    const token = jwt.sign({ BusNumber: Users.BusNumber }, JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ error: "error" });
    }
  }
};

// Fetch user data
const userData = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userBusNumber = user.BusNumber;

    Admin.findOne({ BusNumber: userBusNumber }).then((data) => {
      return res.send({ status: "ok", data: data });
    });
  } catch (error) {
    return res.send({ error: "error" });
  }
};

// Logout a user
const logout = async (req, res) => {
  const { token } = req.body;
  // Optionally implement token blacklist logic here if needed.
  return res.send({ status: "ok", data: "user logged out" });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userBusNumber = user.BusNumber;

    await Admin.deleteOne({ BusNumber: userBusNumber });
    return res.send({ status: "ok", data: "user deleted" });
  } catch (error) {
    return res.send({ error: "error" });
  }
};



module.exports = {
  adduser,
  loginuser,
  userData,
  deleteUser,
  logout,
  getAllUsers
};
