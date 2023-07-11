const Car = require('../models/car')

module.exports = {
new: newCar,
index, 
create
}

function index(req,res){
  res.render('cars/index', {title: 'Your Garage'})
}

function newCar(req,res){
res.render('cars/new', {title: 'Add Your Car'})
}

async function create(req,res){
  console.log(req.body)
  console.log(req.user)
  req.body.user = req.user.id
  try{
    const carsFromTheDatabase = await Car.create(req.body)

    console.log(carsFromTheDatabase)

  }catch(err){
    console.log(err)
  }
}

