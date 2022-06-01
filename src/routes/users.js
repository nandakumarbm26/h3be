var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("C:Users/nanda/nodeApph3be/routes/index");
});
module.exports = router;
