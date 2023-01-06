import jwt from "jsonwebtoken";

export default function(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.match(/^Bearer (.*)$/)[1];
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.data = decoded;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};