const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

// Get users
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// Get user
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  res.status(200).json(user);
});

// Add user
exports.addUsers = asyncHandler(async (req, res) => {
  const user = await User.create({
    email: req.body.email,
    name: req.body.name,
    surname: req.body.surname,
    city: req.body.city,
    birthDates: req.body.birthDates,
  });
  res.status(200).json(user);
});

// Delete user
exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  await user.remove();

  res.status(200).json({ id: req.params.id });
});

// Update user
exports.updateUsers = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// Get insurance
exports.getInsurance = asyncHandler(async (req, res) => {
  const insurance = await User.findById(req.params.id)
    .select('city')
    .select('birthDates');

  if (!insurance) {
    res.status(400);
    throw new Error('User not found');
  }

  let amount;
  if (insurance.city.toLowerCase() === 'zagreb') {
    amount = 1000;
  } else if (insurance.city.toLowerCase() === 'split') {
    amount = 950;
  } else if (insurance.city.toLowerCase() === 'rijeka') {
    amount = 900;
  } else if (insurance.city.toLowerCase() === 'osijek') {
    amount = 900;
  } else if (insurance.city.toLowerCase() === 'zadar') {
    amount = 800;
  } else if (
    insurance.city.toLowerCase() !== 'split' ||
    'rijeka' ||
    'zagreb' ||
    'zadar' ||
    'osijek'
  ) {
    amount = 700;
  }

  let dateNew = insurance.birthDates.split('.');

  let date = new Date(dateNew[2], dateNew[1], dateNew[0]).getFullYear();

  let year = new Date().getFullYear();

  let age = year - date;

  let discount;
  if (age <= 20) {
    discount = 20 / 100;
  } else if (age <= 30 && age >= 20) {
    discount = 10 / 100;
  } else if (age <= 40 && age >= 30) {
    discount = 5 / 100;
  } else if (age <= 60 && age >= 40) {
    discount = 2 / 100;
  } else if (age <= 200 && age >= 60) {
    discount = 0;
  }

  let dataDiscount = discount * amount;

  let data = amount - dataDiscount;

  res.status(200).json(data);
});
