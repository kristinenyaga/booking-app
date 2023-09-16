import jwt from "jsonwebtoken";

export  async function verifyToken(req, res, next) {
  const token = req.cookies.token
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({ error: "you are not authorized" });
        }
        else {
          req.user = decoded; // Attach the decoded user data to the request object
          next(); //proceed to the next route handler
        }
      });
    }
    else {
      res.status(401).json({ error: "you are not authorized" });
      
    }

  } catch (error) {
    res.status(401).json({ error: "you are not authorized" });
  }
}

export const verifyAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next()
  }
  else {
    res.status(401).json({error:"You are not authorized"})
  }
  
}