const Car = require('../models/car')

module.exports = {
index,
show
}

async function index(req,res){
  const rentals = await Car
  .find({})
  .populate('user') //  'cast' is the property name on the movie schema that has ref: 'Performer'
  .exec();
console.log(rentals[0].user._id.valueOf());

  
  
res.render('rentals/index', {rentals: rentals})
}

async function show(req,res){
  const rental = await Car.findById(req.params.id);
  console.log(rental);
  res.render('rentals/show', {rentals: rentals})

}