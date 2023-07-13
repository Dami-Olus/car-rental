const Car = require("../models/car");
const Request = require("../models/request");

const carOptions = require("../api/cars")

module.exports = {
  new: newCar,
  index,
  create,
  delete: deleteCar,
  show,
  update,
  edit,
};

async function edit(req, res) {
  const car = await Car.findById(req.params.id);
  res.render("cars/edit", { car: car });
}

async function show(req, res) {
  const car = await Car.findById(req.params.id);

  res.render("cars/show", { car: car });
}

async function index(req, res) {
  const cars = await Car.find({ user: req.user._id });

  const requests = await Request.find({}).populate('car').exec()
  res.render("cars/index", { title: "Your Garage", cars: cars, requests: requests});
}

async function newCar(req, res) {
  const cars = await carOptions.fetchCars({})
  res.render("cars/new", { title: "Add Your Car", cars: cars });
}

async function create(req, res) {

  try {
    req.body.user = req.user.id;
    const carsFromTheDatabase = await Car.create(req.body);
    res.redirect("/cars");
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  const update = req.body;
  const car = await Car.findOneAndUpdate({ _id: req.params.id }, update);
  res.redirect(`/cars/${req.params.id}`);
}

async function deleteCar(req, res) {
  await Car.deleteOne({ _id: req.params.id });
  res.redirect("/cars");
}


