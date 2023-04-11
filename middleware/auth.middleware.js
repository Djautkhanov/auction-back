const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const  tokenUser = req.body.token;

  if (tokenUser === `Bearer ${null}`) {
    return res.status(400).json({error : "Авторизуйтесь чтобы разместить лот"});
  }

  const [type, token] = tokenUser.split(" ");

  if (type !== "Bearer") {
    return res.status(400).json({error: "Авторизуйтесь"});
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)
    next()
  } catch (error) {
    return res.json("skjfbhjbfhjsdbhj")
  }
};
