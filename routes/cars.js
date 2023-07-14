const router = require("express").Router();

const carsCtrl = require("../controllers/cars");

//view all user's cars
router.get("/", carsCtrl.index);

//view form to add a new car
router.get("/new", carsCtrl.new);

//add a new car to users profile
router.post("/", carsCtrl.create)

//see details of added cars
router.get('/:id', carsCtrl.show)

//view form to edit details of car
router.get('/:id/edit', carsCtrl.edit)

//update details of car
router.put('/:id/', carsCtrl.update)

//delet car from users profile
router.delete('/:id', carsCtrl.delete)

module.exports = router;