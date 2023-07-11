const Car = require("../models/car");

module.exports = {
  new: newCar,
  index,
  create,
  delete: deleteCar,
  show
};

async function show(req, res) {
  console.log(req.params);
  const car = await Car.findById(req.params.id);
  console.log(car);
  res.render('cars/show', {car: car})
}

async function index(req, res) {
  const cars = await Car.find({user: req.user._id});
  console.log(cars)
  res.render("cars/index", { title: "Your Garage", cars: cars });
}

function newCar(req, res) {
  res.render("cars/new", { title: "Add Your Car" });
}

async function create(req, res) {
  console.log(req.body);
  console.log(req.user);

  try {
    req.body.user = req.user.id;
    const carsFromTheDatabase = await Car.create(req.body);

    console.log(carsFromTheDatabase);
    res.redirect("/cars");
  } catch (err) {
    console.log(err);
  }
}

function deleteCar() {}
