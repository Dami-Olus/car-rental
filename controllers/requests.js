const Request = require("../models/request");

module.exports = {
  create,
};

async function create(req,res){
  console.log(req.params)
  console.log(req.body)
  console.log(req.user)
  req.body.car = req.params.id
  req.body.userId = req.user.id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  await Request.create(req.body)
  res.redirect('/rentals')
}
