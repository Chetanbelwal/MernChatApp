import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "User Not Authenticated", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token", success: false });
    }
    req.id = decoded.userid;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleware;
