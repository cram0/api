const router = require("express").Router();

router.use("/", (req, res, next) => {
	const today = new Date();
	const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
	console.log(time, req.method, req.url);
	next();
});

module.exports = router;
