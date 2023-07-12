const Car = require("../models/car");

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
  console.log(cars);
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

async function update(req, res) {
  const update = req.body;
  console.log(update);
  console.log(req.params.id)
  const car = await Car.findOneAndUpdate({ _id: req.params.id },update);
  console.log(car)
  res.redirect(`/cars/${req.params.id}`);
}

async function deleteCar(req, res) {
  await Car.deleteOne({_id: req.params.id})
  res.redirect('/cars')
}
