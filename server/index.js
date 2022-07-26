const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const route = require('./routes');

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    autoIndex: true, //make this also true
  })
  .then(() => {
    console.log('Connected to mongoDB');
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

route(app);

app.listen(8000, () => {
  console.log('Server is running');
});
