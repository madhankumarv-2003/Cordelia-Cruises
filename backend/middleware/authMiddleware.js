import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  
  if (!token)
    return res.status(401).json({ msg: "Access denied, no token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};
