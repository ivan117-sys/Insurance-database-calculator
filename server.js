const express = require('express');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/error_middleware');
const cors = require('cors');

const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });

connectDB();

const users = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users/', users);

const PORT = process.env.PORT;

app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
  });
}
