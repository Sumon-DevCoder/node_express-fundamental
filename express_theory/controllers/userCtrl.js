const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  const result = await userModel.find();
  res.send({ result });
};

const getUserById = async (req, res) => {
  console.log(req.params);

  const result = await userModel.findById(req.param.id);
  res.send({ result });
};

const createUser = async () => {
  const { name, email, password } = req.body;

  const result = await userModel.create({
    name,
    email,
    password,
  });

  res.status(201).send({ result });
};

module.exports = { createUser, getUsers, getUserById };
