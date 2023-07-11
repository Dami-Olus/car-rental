const router = require("express").Router();

const carsCtrl = require("../controllers/cars");

router.get("/", carsCtrl.index);

router.get("/new", carsCtrl.new);

module.exports = router;