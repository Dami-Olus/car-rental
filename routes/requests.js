const router = require("express").Router();

const requestsCtrl = require("../controllers/requests");

//create a new request
router.post('/:id', requestsCtrl.create)

module.exports = router