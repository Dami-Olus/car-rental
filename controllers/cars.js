const Car = require('../models/car')

module.exports = {
new: newCar,
index
}

function index(req,res){
  res.render('cars/index', {title: 'Your Garage'})
}

function newCar(req,res){
res.render('cars/new', {title: 'Add Your Car'})
}

