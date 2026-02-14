const ApiError = require('../errors/ApiError');

let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next(new ApiError(400, 'INVALID_INPUT', 'Name and email required'));
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
};
