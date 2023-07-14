const router = require("express").Router();

const rentalsCtrl = require("../controllers/rentals");

//see all cars available for rent
router.get("/", rentalsCtrl.index);

//see details of a rental
router.get('/:id', rentalsCtrl.show)


module.exports = router;