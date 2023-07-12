const Car = require('../models/car')
const Request = require('../models/request')

module.exports = {
index,
show
}

async function index(req,res){
  const requests = await Request.find({}).populate('car').exec()
  console.log(requests)
  const rentals = await Car
  .find({})
  .populate('user') //  'cast' is the property name on the movie schema that has ref: 'Performer'
  .exec();
console.log(rentals[0].user._id.valueOf());

  
  
res.render('rentals/index', {rentals: rentals, requests: requests})
}

async function show(req,res){
  const rental = await Car.findById(req.params.id).populate('user').exec();
  console.log(rental);
  res.render('rentals/show', {rental: rental})

}