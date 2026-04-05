const jwt = require("jsonwebtoken");

const checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.headers.role;

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "secretkey");

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { protect, checkRole };