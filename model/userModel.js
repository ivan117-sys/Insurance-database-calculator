const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add a email value'],
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
      required: [true, 'Please add a surname value'],
    },
    city: {
      type: String,
      required: [true, 'Please add a city value'],
    },
    birthDates: {
      type: String,
      required: [true, 'Please add a birthDates value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
