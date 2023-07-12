const router = require("express").Router();

const requestsCtrl = require("../controllers/requests");

router.post('/:id', requestsCtrl.create)

module.exports = router