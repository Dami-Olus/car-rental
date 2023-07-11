const Car = require('../models/car')

module.exports = {
index,
show
}

async function index(req,res){
  const rentals = await Car.find({})
res.render('rentals/index', {rentals: rentals})
}

async function show(req,res){
  const rental = await Car.findById(req.params.id);
  console.log(rental);
  res.render('rentals/show', {rental: rental})

}