const router = require("express").Router();

const rentalsCtrl = require("../controllers/rentals");

router.get("/", rentalsCtrl.index);

router.get('/:id', rentalsCtrl.show)

module.exports = router;