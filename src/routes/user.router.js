const { getAll, create, getOne, del, upd } = require('../controllers/user.controllers');
const express = require('express');

const userRoute = express.Router();
 userRoute.route("/")
		.get(getAll)
		.post(create)

 userRoute.route("/:id")
		.get(getOne) 
		.delete(del)
		.put(upd)

module.exports = userRoute;