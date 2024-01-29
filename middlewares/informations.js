const router = require("express").Router();

router.get("/", (req, res, next) => {
	console.log(req.method, req.url);
	next();
});

module.exports = router;
