import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.SECRET
    );

    req.user = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authenticate;