const jwt = require("jsonwebtoken");

const JWT_SECRET = "keshanabatman";

// Middleware for verifying JWT tokens
const authenticateToken = (req, res, next) => {
    const token = req.header("auth-token");
    
    // Log the token for debugging
    console.log("Received token:", token);
  
    if (!token) return res.status(401).send({ error: "Access Denied" });
  
    try {
      const verified = jwt.verify(token, JWT_SECRET);
      
      // Log the verified token payload
      console.log("Verified token payload:", verified);
  
      req.user = verified; // Store the verified token payload in req.user
      next();
    } catch (error) {
      console.error("Invalid token:", error.message); // Log error details
      res.status(400).send({ error: "Invalid Token" });
    }
  };
  

module.exports = { authenticateToken };
